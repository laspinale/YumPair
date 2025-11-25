const trendingPairings = [
  {
    title: "Spicy Mango + Grilled Halloumi",
    summary: "Sweet, smoky, and salty with a cooling lime-yogurt drizzle.",
    tags: ["summer", "vegetarian", "fresh"],
    rating: 4.9,
    votes: 284,
    approval: 94
  },
  {
    title: "Miso Butter Steak + Charred Broccolini",
    summary: "Umami bomb finished with crispy garlic and sesame crunch.",
    tags: ["umami", "weeknight", "savory"],
    rating: 4.8,
    votes: 412,
    approval: 92
  },
  {
    title: "Coconut Rice + Hot Honey Shrimp",
    summary: "Silky rice meets sweet heat and a squeeze of lime.",
    tags: ["quick", "seafood", "sweet heat"],
    rating: 4.7,
    votes: 198,
    approval: 89
  }
];

const spotlight = {
  title: "Charred Peach + Burrata Toast",
  summary:
    "Brushed with brown butter, topped with basil oil, pistachio dust, and a finishing drizzle of aged balsamic.",
  tags: ["brunch", "stone fruit", "creamy"],
  rating: 4.95,
  votes: 327,
  approval: 97,
  creator: "Lena M.",
  time: "2h ago"
};

const feedItems = [
  {
    user: "Alex P.",
    action: "rated",
    target: "Coconut Rice + Hot Honey Shrimp",
    detail: "5 stars • said: \"Perfect weeknight treat!\"",
    ago: "4m"
  },
  {
    user: "Sahana R.",
    action: "published",
    target: "Roasted Grapes + Whipped Goat Cheese",
    detail: "tagged: starter, cozy, fall",
    ago: "22m"
  },
  {
    user: "Devon C.",
    action: "remixed",
    target: "Crispy Potato + Chili Crunch Yogurt",
    detail: "added lemon zest + dill",
    ago: "53m"
  }
];

function Rating({ value }: { value: number }) {
  const stars = Array.from({ length: 5 }).map((_, i) => (i < Math.round(value) ? "★" : "☆"));
  return <span className="rating" aria-label={`${value} out of 5 stars`}>{stars.join("")}</span>;
}

export default function Home() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <div className="mark">YP</div>
          <div>
            <div style={{ fontSize: "0.95rem", color: "var(--muted)", fontWeight: 600 }}>Discover & Rate</div>
            <div style={{ fontSize: "1.2rem" }}>YumPair</div>
          </div>
        </div>
        <div className="badge">👩‍🍳 Built for home cooks & flavor tinkerers</div>
      </header>

      <section className="hero">
        <div>
          <h1>
            Pair foods, get <span>rated</span>, and inspire new cravings.
          </h1>
          <p>
            YumPair is a collaborative tasting ground for adventurous cooks. Draft a pairing, add your finishing
            touches, and see how the community scores your flavor instinct.
          </p>
        </div>
        <div className="hero-cta">
          <button className="button primary">Create a pairing</button>
          <button className="button secondary">Browse community board</button>
          <div className="badge">Live: 2.4k tasters online</div>
        </div>
      </section>

      <section className="grid">
        <div className="card pairing-card">
          <div className="pair-label">Spotlight Pairing</div>
          <div className="title">{spotlight.title}</div>
          <p className="muted">{spotlight.summary}</p>
          <div className="tag-list">
            {spotlight.tags.map(tag => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
          <div className="stat-row">
            <span>
              <Rating value={spotlight.rating} /> {spotlight.rating.toFixed(2)} ({spotlight.votes} votes)
            </span>
            <span>Approval: {spotlight.approval}%</span>
          </div>
          <div className="progress" aria-label="Approval rate">
            <span style={{ width: `${spotlight.approval}%` }} />
          </div>
          <div className="muted">
            Curated by <strong style={{ color: "#fff" }}>{spotlight.creator}</strong> · {spotlight.time}
          </div>
        </div>

        <div className="card form-card">
          <div className="section-title">
            <h2>Compose a pairing</h2>
            <span className="badge">Draft mode</span>
          </div>
          <form>
            <div>
              <div className="label-row">
                <span>Base ingredient</span>
                <span>Step 1/3</span>
              </div>
              <input placeholder="e.g. sourdough toast, roasted carrots" />
            </div>
            <div>
              <div className="label-row">
                <span>Partner ingredient</span>
                <span>Step 2/3</span>
              </div>
              <input placeholder="e.g. whipped feta, sesame brittle" />
            </div>
            <div>
              <div className="label-row">
                <span>Finishing move</span>
                <span>Optional</span>
              </div>
              <textarea rows={3} placeholder="Describe sauces, spices, texture pops, or plating notes" />
            </div>
            <div className="tag-list">
              {["crunchy", "bright", "comfort", "weeknight", "plant-based"].map(tag => (
                <span key={tag} className="pill">
                  + {tag}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button type="button" className="button primary" style={{ flex: 1 }}>
                Save draft
              </button>
              <button type="button" className="button secondary" style={{ flex: 1 }}>
                Share for rating
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="split">
        <div>
          <div className="section-title">
            <h2>Trending pairings</h2>
            <span className="badge">Based on this week&apos;s ratings</span>
          </div>
          <div className="grid">
            {trendingPairings.map(pair => (
              <div key={pair.title} className="card pairing-card">
                <div className="title">{pair.title}</div>
                <p className="muted">{pair.summary}</p>
                <div className="tag-list">
                  {pair.tags.map(tag => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="stat-row">
                  <span>
                    <Rating value={pair.rating} /> {pair.rating.toFixed(1)}
                  </span>
                  <span>{pair.votes} votes</span>
                  <span>{pair.approval}% approval</span>
                </div>
                <div className="progress" aria-label={`${pair.approval}% approval`}>
                  <span style={{ width: `${pair.approval}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="section-title">
            <h2>Latest community activity</h2>
            <span className="badge">Realtime</span>
          </div>
          <div className="feed">
            {feedItems.map(item => (
              <div key={`${item.user}-${item.target}`} className="feed-item">
                <div className="avatar-row">
                  <div className="avatar">{item.user[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{item.user}</div>
                    <div className="muted">{item.ago} ago</div>
                  </div>
                </div>
                <div>
                  <strong>{item.user}</strong> {item.action} <strong>{item.target}</strong>
                </div>
                <div className="muted">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
