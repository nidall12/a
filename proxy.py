import requests

url = 'https://ipv4.icanhazip.com'
proxy = 'http://_country-id@geo.iproyal.com:12321'
proxy_auth = 'dgQk19rhe9IfT5dQ:HbzWVsg8EIRrQsyj'
proxies = {
    'http': f'http://{proxy_auth}@{proxy}',
    'https': f'http://{proxy_auth}@{proxy}'
}

response = requests.get(url, proxies=proxies)
print(response.text)