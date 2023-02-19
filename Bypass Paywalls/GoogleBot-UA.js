;(async () => {
    const headers = $request.headers
  
    delete headers['User-Agent']
    delete headers['Cookie']
    
    headers['User-Agent'] = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'

    $done({ headers })
  })()