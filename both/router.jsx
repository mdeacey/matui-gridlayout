Reaktor.init(
    <Router>
        <Route path="/" layout={MainLayout} />
        <Route path="/home" layout={MainLayout} content={Home} />
        <Route path="/register" layout={MainLayout} content={Register} />
    </Router>
);
