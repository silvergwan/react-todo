function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Clean Page</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\n    }\n\n    body {\n      background: #f5f6f8;\n      color: #222;\n      line-height: 1.6;\n    }\n\n    header {\n      background: #ffffff;\n      padding: 24px 32px;\n      border-bottom: 1px solid #e5e7eb;\n    }\n\n    header h1 {\n      font-size: 20px;\n      font-weight: 600;\n    }\n\n    main {\n      max-width: 720px;\n      margin: 48px auto;\n      padding: 0 24px;\n    }\n\n    .card {\n      background: #ffffff;\n      padding: 32px;\n      border-radius: 12px;\n      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);\n    }\n\n    .card h2 {\n      font-size: 24px;\n      margin-bottom: 12px;\n    }\n\n    .card p {\n      color: #555;\n      margin-bottom: 24px;\n    }\n\n    .button {\n      display: inline-block;\n      padding: 12px 20px;\n      border-radius: 8px;\n      background: #4f46e5;\n      color: #fff;\n      text-decoration: none;\n      font-weight: 500;\n      transition: background 0.2s ease;\n    }\n\n    .button:hover {\n      background: #4338ca;\n    }\n\n    footer {\n      margin-top: 64px;\n      padding: 24px;\n      text-align: center;\n      font-size: 14px;\n      color: #888;\n    }\n  ',
        }}
      />
      <header>
        <h1>My Clean Page</h1>
      </header>
      <main>
        <div className="card">
          <h2>환영합니다</h2>
          <p>
            이 페이지는 불필요한 요소 없이, 구조와 가독성에만 집중한 HTML
            예시입니다.
          </p>
          <a href="#" className="button">
            시작하기
          </a>
        </div>
      </main>
      <footer>© 2025 Your Name. All rights reserved.</footer>
    </>
  );
}

export default App;
