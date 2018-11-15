
import requests 


codes = [2480,2667,2666,2683,2704,2487,2417,2429,2483,2635,2414,2376,2393,2634,2711,2491,2446,2484,2412,2482,2384,2427,2493,2689,2728,2490,2701,2382,2410,2397,2377,2494,2440,2454,2717,2654,2458,2432,2726,2461,2396,2435,2443,2492,2423,2406,2422,2419,2426,2457,2391,2389,2473,2401,2470,2466,2663,2460,2628,2665,2727,2664,2669,2459,2416]

headers = {
    'Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiIxIiwiaXNzIjoiZGlzdHJpYnV0b3JhcGkuaGdvYm94LmNvbSIsInRpbWUiOiIxNTQyMDA2MzQ1In0.WA6zfLRpKIqlKUnVfB-CyfCxW1k5q4tG85lXIaZ07NrtpW_cXWsoC3v5t2qj6czYLHB3vnWgeWOx6FsU4QFnwQ'
}

result = {}

for code in codes: 
    total_code = 'HG00000' + str(code)
    URL = 'https://distributorapi.hgobox.com/vms/{}/qrcode/v1'.format(total_code)
    r = requests.get(url = URL, headers= headers) 
    data = r.json() 
    result[total_code] = data["data"]["url"]

print(result)
    




