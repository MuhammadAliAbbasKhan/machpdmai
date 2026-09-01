from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
import datetime
import time
from .models import UserAccount, SubscriptionOrder, QuizSubmission, ContactInquiry, PremiumServiceRequest, NewsletterSubscriber
from .db_mongo import sync_to_mongo

ADMIN_PASSCODE = 'aliabbas1234578!'

@api_view(['POST'])
def register_user(request):
    data = request.data
    username = data.get('username', '').strip()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '').strip()
    company = data.get('company', '').strip()

    if not email or not password:
        return Response({'success': False, 'message': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

    if not username:
        username = email.split('@')[0]

    user = UserAccount.objects.filter(email=email).first()
    if user:
        return Response({'success': False, 'message': 'An account with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.create(
        username=username,
        email=email,
        password=password,
        company=company,
        is_paid=False,
        active_plan='Free Tier'
    )
    
    sync_to_mongo('users', {
        'username': username,
        'email': email,
        'company': company,
        'is_paid': False,
        'active_plan': 'Free Tier',
        'created_at': time.time()
    })

    return Response({
        'success': True,
        'message': 'Account registered successfully!',
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'company': user.company,
            'is_paid': False,
            'active_plan': 'Free Tier'
        }
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_user(request):
    data = request.data
    email = data.get('email', '').strip().lower()
    password = data.get('password', '').strip()

    if not email or not password:
        return Response({'success': False, 'message': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.filter(email=email).first()
    if not user or user.password != password:
        return Response({'success': False, 'message': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)

    is_active = user.is_subscription_active()

    return Response({
        'success': True,
        'message': 'Signed in successfully!',
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'company': user.company,
            'is_paid': is_active,
            'active_plan': user.active_plan,
            'paid_until': user.paid_until.isoformat() if user.paid_until else None
        }
    })

@api_view(['POST'])
def subscribe_plan(request):
    data = request.data
    plan_name = data.get('plan_name', 'Professional Predictive AI')
    amount = data.get('amount', 150)
    email = data.get('email', '').strip().lower()
    cardholder_name = data.get('cardholder_name', 'Subscriber')

    # Check if user already has an active subscription for the current month
    user = UserAccount.objects.filter(email=email).first()
    if user and user.is_subscription_active():
        return Response({
            'success': True,
            'already_subscribed': True,
            'message': f'You already have an active subscription for {user.active_plan} valid until {user.paid_until.strftime("%B %d, %Y")}.',
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'company': user.company,
                'is_paid': True,
                'active_plan': user.active_plan,
                'paid_until': user.paid_until.isoformat()
            }
        })

    order = SubscriptionOrder.objects.create(
        plan_name=plan_name,
        amount=amount,
        email=email,
        cardholder_name=cardholder_name,
        stripe_payment_id=f"sub_pdm_{int(time.time())}"
    )

    paid_until_date = timezone.now() + datetime.timedelta(days=30)

    if user:
        user.is_paid = True
        user.active_plan = plan_name
        user.paid_until = paid_until_date
        user.save()

    sync_to_mongo('subscriptions', {
        'order_id': order.id,
        'plan_name': plan_name,
        'amount': float(amount),
        'email': email,
        'cardholder': cardholder_name,
        'created_at': time.time()
    })

    return Response({
        'success': True,
        'message': f'Subscription activated successfully for {plan_name}!',
        'order_id': order.id,
        'plan_name': plan_name,
        'amount': amount,
        'paid_until': paid_until_date.isoformat(),
        'user': {
            'id': user.id if user else 0,
            'username': user.username if user else email,
            'email': email,
            'company': user.company if user else '',
            'is_paid': True,
            'active_plan': plan_name,
            'paid_until': paid_until_date.isoformat()
        }
    })

@api_view(['POST'])
def submit_premium_request(request):
    data = request.data
    user_email = data.get('user_email', '').strip().lower()
    plan_name = data.get('plan_name', 'Professional Predictive AI')
    service_type = data.get('service_type', '').strip()
    asset_type = data.get('asset_type', '').strip()
    urgency = data.get('urgency', 'Normal')
    details = data.get('details', '').strip()

    if not user_email or not service_type or not details:
        return Response({'success': False, 'message': 'Email, service type, and details are required.'}, status=status.HTTP_400_BAD_REQUEST)

    req_obj = PremiumServiceRequest.objects.create(
        user_email=user_email,
        plan_name=plan_name,
        service_type=service_type,
        asset_type=asset_type,
        urgency=urgency,
        details=details,
        status='Pending Engineer Review'
    )

    sync_to_mongo('premium_requests', {
        'id': req_obj.id,
        'email': user_email,
        'service_type': service_type,
        'asset_type': asset_type,
        'urgency': urgency,
        'created_at': time.time()
    })

    return Response({
        'success': True,
        'message': 'Your premium service request has been submitted successfully to our senior industrial AI engineers!',
        'request_id': req_obj.id,
        'status': 'Pending Engineer Review'
    })

@api_view(['POST'])
def quiz_submit(request):
    data = request.data
    email = data.get('email', '').strip()
    fleet_size = data.get('fleet_size', '')
    primary_asset_type = data.get('primary_asset_type', '')
    annual_downtime_hours = data.get('annual_downtime_hours', '')
    recommended_package = data.get('recommended_package', 'Professional Predictive AI')
    estimated_savings = data.get('estimated_savings', '$240,000 / year')

    sub = QuizSubmission.objects.create(
        email=email,
        fleet_size=fleet_size,
        primary_asset_type=primary_asset_type,
        annual_downtime_hours=annual_downtime_hours,
        recommended_package=recommended_package,
        estimated_savings=estimated_savings
    )

    sync_to_mongo('quizzes', {
        'id': sub.id,
        'email': email,
        'fleet_size': fleet_size,
        'recommended_package': recommended_package,
        'created_at': time.time()
    })

    return Response({
        'success': True,
        'message': 'Machine ROI & Downtime Assessment submitted successfully!',
        'submission_id': sub.id,
        'recommended_package': recommended_package,
        'estimated_savings': estimated_savings
    })

@api_view(['POST'])
def contact_submit(request):
    data = request.data
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    subject = data.get('subject', '').strip()
    message = data.get('message', '').strip()

    if not name or not email or not message:
        return Response({'success': False, 'message': 'Name, email, and message are required.'}, status=status.HTTP_400_BAD_REQUEST)

    inquiry = ContactInquiry.objects.create(
        name=name,
        email=email,
        subject=subject,
        message=message
    )

    sync_to_mongo('inquiries', {
        'id': inquiry.id,
        'name': name,
        'email': email,
        'subject': subject,
        'created_at': time.time()
    })

    return Response({
        'success': True,
        'message': 'Your inquiry has been submitted. Our engineering team will reach out shortly!',
        'inquiry_id': inquiry.id
    })

@api_view(['POST'])
def newsletter_submit(request):
    data = request.data
    email = data.get('email', '').strip().lower()
    if not email:
        return Response({'success': False, 'message': 'Email address required.'}, status=status.HTTP_400_BAD_REQUEST)

    NewsletterSubscriber.objects.get_or_create(email=email)
    sync_to_mongo('newsletters', {'email': email, 'created_at': time.time()})
    return Response({'success': True, 'message': 'Subscribed to MachPdMAI Industrial AI Insights!'})

@api_view(['GET'])
def admin_analytics(request):
    passcode = request.headers.get('X-Admin-Passcode', '')
    if passcode != ADMIN_PASSCODE:
        return Response({'success': False, 'message': 'Unauthorized: Invalid Admin Passcode'}, status=status.HTTP_403_FORBIDDEN)

    users_list = list(UserAccount.objects.values('id', 'username', 'email', 'company', 'is_paid', 'active_plan', 'created_at'))
    subscriptions_list = list(SubscriptionOrder.objects.values('id', 'plan_name', 'amount', 'email', 'cardholder_name', 'created_at'))
    quizzes_list = list(QuizSubmission.objects.values('id', 'email', 'fleet_size', 'primary_asset_type', 'recommended_package', 'estimated_savings', 'created_at'))
    inquiries_list = list(ContactInquiry.objects.values('id', 'name', 'email', 'subject', 'message', 'created_at'))
    premium_requests_list = list(PremiumServiceRequest.objects.values('id', 'user_email', 'plan_name', 'service_type', 'asset_type', 'urgency', 'details', 'status', 'created_at'))

    return Response({
        'success': True,
        'analytics': {
            'total_users': UserAccount.objects.count(),
            'total_subscribers': SubscriptionOrder.objects.count(),
            'total_quizzes': QuizSubmission.objects.count(),
            'total_inquiries': ContactInquiry.objects.count(),
            'total_newsletters': NewsletterSubscriber.objects.count(),
            'total_premium_requests': PremiumServiceRequest.objects.count(),
            'users': users_list,
            'subscriptions': subscriptions_list,
            'quizzes': quizzes_list,
            'inquiries': inquiries_list,
            'premium_requests': premium_requests_list
        }
    })
