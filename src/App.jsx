import './App.css'

function App() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          DataPilot<span>AI</span>
        </div>

        <div className="nav-links">
          <button onClick={() => scrollToSection('features')}>Features</button>
          <button onClick={() => scrollToSection('how-it-works')}>How it works</button>
          <button onClick={() => scrollToSection('product')}>Product</button>
        </div>
      <button
      className="nav-button"
      onClick={() => scrollToSection('product')}
      >
      Get Started
     </button>
      </nav>


      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            <span></span>
            AI-powered analytics
          </div>

          <h1>
            Turn your data into
            <span> better decisions.</span>
          </h1>

          <p>
            DataPilot AI transforms complex data into clear insights,
            interactive dashboards and actionable recommendations.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Start Exploring →
            </button>

            <button className="secondary-button">
              See how it works
            </button>
          </div>

          <div className="hero-note">
            <span>✓</span> Built for modern data teams
          </div>

        </div>


        {/* DASHBOARD PREVIEW */}
        <div className="hero-dashboard">

          <div className="dashboard-top">

            <div>
              <small>Sample workspace</small>
              <h3>Analytics Overview</h3>
            </div>

            <div className="status">
              ● Live
            </div>

          </div>


          {/* STAT CARDS */}
          <div className="stats">

            <div className="stat-card">
              <small>Revenue</small>
              <strong>₹1.24M</strong>
              <span className="positive">+18.4%</span>
            </div>

            <div className="stat-card">
              <small>Orders</small>
              <strong>8,421</strong>
              <span className="positive">+12.8%</span>
            </div>

            <div className="stat-card">
              <small>Conversion</small>
              <strong>6.8%</strong>
              <span className="positive">+4.2%</span>
            </div>

          </div>


          {/* CHART */}
          <div className="chart-card">

            <div className="chart-header">

              <div>
                <small>Revenue trend</small>
                <h4>Last 30 days</h4>
              </div>

              <span className="sample-label">
                DEMO DATA
              </span>

            </div>

            <div className="chart">

              <div className="chart-line"></div>

              <div className="chart-point point1"></div>
              <div className="chart-point point2"></div>
              <div className="chart-point point3"></div>
              <div className="chart-point point4"></div>
              <div className="chart-point point5"></div>

            </div>

          </div>


          {/* AI INSIGHT */}
          <div className="ai-insight">

            <div className="ai-icon">
              ✦
            </div>

            <div>

              <small>AI INSIGHT</small>

              <p>
                Returning customers are driving the strongest
                growth in this sample dataset.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PRODUCT SECTION */}
      <section className="product-section" id="product">

        <div className="section-label">
          THE PRODUCT
        </div>

        <h2>
          From raw numbers to
          <span> real insight.</span>
        </h2>

        <p className="section-description">
          Everything you need to understand what your data is telling you.
        </p>


        {/* LARGE DASHBOARD */}
        <div className="large-dashboard">

          {/* SIDEBAR */}
          <div className="side-menu">

            <div className="side-logo">
              ✦
            </div>

            <div className="menu-item active">
              Overview
            </div>

            <div className="menu-item">
              Analytics
            </div>

            <div className="menu-item">
              Reports
            </div>

            <div className="menu-item">
              Insights
            </div>

          </div>


          {/* DASHBOARD CONTENT */}
          <div className="dashboard-main">

            <div className="main-header">

              <div>

                <small>
                  Workspace / Overview
                </small>

                <h3>
                  Good afternoon 👋
                </h3>

              </div>

              <button className="export-button">
                Export report
              </button>

            </div>


            {/* BIG STATS */}
            <div className="big-stats">

              <div>

                <small>
                  Total Revenue
                </small>

                <strong>
                  ₹1,240,500
                </strong>

                <span>
                  ↑ 18.4% vs previous period
                </span>

              </div>


              <div>

                <small>
                  Customers
                </small>

                <strong>
                  12,842
                </strong>

                <span>
                  ↑ 8.2% vs previous period
                </span>

              </div>


              <div>

                <small>
                  Avg. Order
                </small>

                <strong>
                  ₹2,840
                </strong>

                <span>
                  ↑ 5.6% vs previous period
                </span>

              </div>

            </div>


            {/* ANALYTICS ROW */}
            <div className="analytics-row">

              <div className="analytics-chart">

                <div className="chart-title">

                  <strong>
                    Performance
                  </strong>

                  <small>
                    DEMO DATA
                  </small>

                </div>


                <div className="bars">

                  <div style={{ height: '35%' }}></div>

                  <div style={{ height: '48%' }}></div>

                  <div style={{ height: '42%' }}></div>

                  <div style={{ height: '62%' }}></div>

                  <div style={{ height: '55%' }}></div>

                  <div style={{ height: '75%' }}></div>

                  <div style={{ height: '88%' }}></div>

                </div>

              </div>


              {/* INSIGHT PANEL */}
              <div className="insight-panel">

                <div className="ai-icon">
                  ✦
                </div>

                <h4>
                  AI Recommendation
                </h4>

                <p>
                  Your sample dataset shows stronger performance
                  from returning customers.
                </p>

                <button>
                  Explore insight →
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES SECTION */}
      <section className="features-section" id="features">

        <div className="section-label">
          WHY DATAPILOT
        </div>

        <h2>
          Everything you need to
          <span> understand data.</span>
        </h2>


        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              ◈
            </div>

            <h3>
              Instant Analytics
            </h3>

            <p>
              Turn raw datasets into meaningful visualizations
              without complicated setup.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ✦
            </div>

            <h3>
              AI Insights
            </h3>

            <p>
              Let AI explain patterns, trends and opportunities
              hidden inside your data.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ▦
            </div>

            <h3>
              Interactive Dashboards
            </h3>

            <p>
              Explore your most important metrics through
              clean and intuitive dashboards.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ↗
            </div>

            <h3>
              Share & Export
            </h3>

            <p>
              Turn your analysis into reports that are easy
              to share with your team.
            </p>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="steps-section" id="how-it-works">

        <div className="section-label">
          HOW IT WORKS
        </div>

        <h2>
          Four steps to
          <span> clarity.</span>
        </h2>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>
              Connect
            </h3>

            <p>
              Bring your dataset into your workspace.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>
              Analyze
            </h3>

            <p>
              DataPilot identifies important patterns.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>
              Understand
            </h3>

            <p>
              AI explains what your numbers mean.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              04
            </div>

            <h3>
              Act
            </h3>

            <p>
              Use insights to make better decisions.
            </p>

          </div>

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="cta-section">

        <div className="cta-glow"></div>

        <div className="section-label">
          READY WHEN YOU ARE
        </div>

        <h2>
          Make your data
          <span> work harder.</span>
        </h2>

        <p>
          Explore a smarter way to understand your data.
        </p>

        <button className="primary-button">
          Start Exploring →
        </button>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          <span>✦</span> DataPilot<span>AI</span>
        </div>

        <p>
          Turn your data into better decisions.
        </p>

        <div className="footer-bottom">

          <span>
            © 2026 DataPilot AI
          </span>

          <span>
            Sample product concept
          </span>

        </div>

      </footer>

    </div>
  )
}

export default App