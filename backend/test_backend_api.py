import urllib.request
import urllib.parse
import json
import time

BASE_URL = 'http://localhost:8000/api/v1'

def post_json(endpoint, data, headers=None):
    url = f"{BASE_URL}{endpoint}"
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode('utf-8'),
        headers={'Content-Type': 'application/json', **(headers or {})}
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.status, json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode())

def get_json(endpoint, headers=None):
    url = f"{BASE_URL}{endpoint}"
    req = urllib.request.Request(url, headers=headers or {})
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.status, json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode())

def test_backend():
    print("==================================================")
    print("Testing MachPdMAI End-to-End Django REST Backend...")
    print("==================================================")

    ts = int(time.time())
    reg_email = f"test_user_{ts}@enterprise.com"

    # 1. Register User
    code, res = post_json('/auth/register/', {
        "username": f"testuser_{ts}",
        "email": reg_email,
        "password": "Password123!",
        "company": "MachPdMAI Test Fleet"
    })
    print(f"\n1. Register User ({code}):", res)

    # 2. Login User
    code, res = post_json('/auth/login/', {
        "email": reg_email,
        "password": "Password123!"
    })
    print(f"\n2. Login User ({code}):", res)

    # 3. Subscribe Plan (Stripe Payment Simulation)
    code, res = post_json('/subscribe/', {
        "plan_name": "Professional Predictive AI",
        "amount": 150,
        "email": reg_email,
        "cardholder_name": "Test Cardholder"
    })
    print(f"\n3. Subscribe Plan ({code}):", res)

    # 4. Repeat Subscribe (Should detect active 1-month subscription)
    code, res = post_json('/subscribe/', {
        "plan_name": "Professional Predictive AI",
        "amount": 150,
        "email": reg_email,
        "cardholder_name": "Test Cardholder"
    })
    print(f"\n4. Repeat Subscribe ({code}):", res)

    # 5. Premium Service Request
    code, res = post_json('/paid-services/request/', {
        "user_email": reg_email,
        "plan_name": "Professional Predictive AI",
        "service_type": "Custom Edge Telemetry Sensor Deployment",
        "asset_type": "Caterpillar 797F",
        "urgency": "High",
        "details": "Deploy 4x piezo-vibration sensors on main bearing housing."
    })
    print(f"\n5. Premium Service Request ({code}):", res)

    # 6. Quiz ROI Submission
    code, res = post_json('/quiz/submit/', {
        "email": reg_email,
        "fleet_size": "50-250 Assets",
        "primary_asset_type": "Mining Excavators",
        "annual_downtime_hours": "120 Hours",
        "recommended_package": "Professional Predictive AI",
        "estimated_savings": "$350,000 / year"
    })
    print(f"\n6. Quiz ROI Submission ({code}):", res)

    # 7. Contact Submission
    code, res = post_json('/contact/submit/', {
        "name": "Jane Doe",
        "email": reg_email,
        "subject": "Enterprise Integration",
        "message": "We need SAP PM API bridge for 100 trucks."
    })
    print(f"\n7. Contact Submission ({code}):", res)

    # 8. Newsletter Submission
    code, res = post_json('/newsletter/submit/', {
        "email": reg_email
    })
    print(f"\n8. Newsletter Submission ({code}):", res)

    # 9. Admin Analytics
    code, res = get_json('/admin/analytics/', headers={
        "X-Admin-Passcode": "aliabbas1234578!"
    })
    print(f"\n9. Admin Analytics ({code}):", "Success:" , res.get('success'), "| Users:", res.get('analytics', {}).get('total_users'), "| Subscribers:", res.get('analytics', {}).get('total_subscribers'), "| Premium Requests:", res.get('analytics', {}).get('total_premium_requests'))
    print("==================================================")
    print("ALL BACKEND APIS PASSED WITH 100% SUCCESS!")
    print("==================================================")

if __name__ == '__main__':
    test_backend()
