function FindProxyForURL(url, host) {
    // 1. BYPASS PROXY FOR GAMES (Direct connection = Low Ping)
    // Add your game console or launcher domains here
    if (shExpMatch(host, "*.steampowered.com") || 
        shExpMatch(host, "*.steamcommunity.com") ||
        shExpMatch(host, "*.playstation.net") ||
        shExpMatch(host, "*.xboxlive.com") ||
        shExpMatch(host, "*.epicgames.com")) {
        return "DIRECT";
    }

    // 2. BYPASS PROXY FOR LOCAL NETWORK
    if (isPlainHostName(host) || 
        shExpMatch(host, "*.local") || 
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    // 3. ROUTE ALL OTHER WEB TRAFFIC THROUGH A FREE SECURE PROXY
    // Using a reliable, free public proxy address
    return "PROXY ://proxy.com; DIRECT";
}
