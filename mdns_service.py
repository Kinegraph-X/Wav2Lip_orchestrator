from zeroconf import Zeroconf, ServiceInfo

def start_mdns_service(port):
    service_info = ServiceInfo(
        "_http._tcp.local.",
        "Avatar._http._tcp.local.",
        addresses=[b'\x7f\x00\x00\x01'],  # 127.0.0.1
        port=port,
        properties={},
    )
    zeroconf = Zeroconf()
    zeroconf.register_service(service_info)
    print("mDNS service registered: avatar.local")
    return zeroconf, service_info
