import './LandingPage.css'
import RandomRecipeSection from '../components/RandomRecipeSection'

// const features = [
//   {
//     icon: '📖',
//     title: 'Browse by mood',
//     description:
//       'Filter by cuisine, cook time, or dietary needs. Find dinner in seconds, not scrolls.',
//   },
//   {
//     icon: '✏️',
//     title: 'Write your way',
//     description:
//       'Add ingredients, steps, and notes exactly how you cook — no rigid templates.',
//   },
//   {
//     icon: '⭐',
//     title: 'Save favorites',
//     description:
//       'Star the recipes you love and build a personal cookbook that grows with you.',
//   },
//   {
//     icon: '🛒',
//     title: 'Smart lists',
//     description:
//       'Turn any recipe into a shopping list so you never forget the basil again.',
//   },
//   {
//     icon: '⏱️',
//     title: 'Cook mode',
//     description:
//       'Large text, step-by-step view, and timers built for messy hands and hot stoves.',
//   },
//   {
//     icon: '👨‍👩‍👧',
//     title: 'Share easily',
//     description:
//       'Send a link to family and friends — your grandma’s lasagna deserves an audience.',
//   },
// ]

// const steps = [
//   {
//     number: '01',
//     title: 'Add a recipe',
//     description: 'Paste a link, type it in, or start from scratch in under a minute.',
//   },
//   {
//     number: '02',
//     title: 'Organize your collection',
//     description: 'Tag by meal type, season, or occasion. Your kitchen, your rules.',
//   },
//   {
//     number: '03',
//     title: 'Cook with confidence',
//     description: 'Open cook mode, follow along, and enjoy the meal you planned.',
//   },
// ]

// const featuredRecipes = [
//   {
//     title: 'Weeknight Lemon Pasta',
//     time: '25 min',
//     tag: 'Quick & easy',
//     emoji: '🍝',
//   },
//   {
//     title: 'Roasted Veg Bowl',
//     time: '40 min',
//     tag: 'Vegetarian',
//     emoji: '🥗',
//   },
//   {
//     title: 'Classic Chocolate Chip Cookies',
//     time: '45 min',
//     tag: 'Dessert',
//     emoji: '🍪',
//   },
//   {
//     title: 'Weeknight Lemon Pasta',
//     time: '25 min',
//     tag: 'Quick & easy',
//     emoji: '🍝',
//   },
//   {
//     title: 'Roasted Veg Bowl',
//     time: '40 min',
//     tag: 'Vegetarian',
//     emoji: '🥗',
//   },
//   {
//     title: 'Classic Chocolate Chip Cookies',
//     time: '45 min',
//     tag: 'Dessert',
//     emoji: '🍪',
//   }
// ]

function LandingPage() {
  return (
    <div className="landing">
      <nav className="nav">
        <a className="nav__logo" href="#">
          J🍔na
        </a>
        <ul className="nav__links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a href="#recipes">Recipes</a>
          </li>
        </ul>
        {/* <div className="nav__actions">
          <a className="btn btn--ghost" href="#">
            Log in
          </a>
          <a className="btn btn--primary" href="#">
            Get started
          </a>
        </div> */}
      </nav>

      <RandomRecipeSection />

      {/* <section className="section section--alt" id="features">
        <div className="section__header">
          <p className="section__eyebrow">Features</p>
          <h2 className="section__title">Everything you need in the kitchen</h2>
          <p className="section__subtitle">
            From saving your first recipe to cooking your hundredth, Recipe App keeps
            things simple and delicious.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-card__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="section__header">
          <p className="section__eyebrow">How it works</p>
          <h2 className="section__title">Up and cooking in three steps</h2>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li className="step" key={step.number}>
              <span className="step__number">{step.number}</span>
              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__description">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--alt" id="recipes">
        <div className="section__header">
          <p className="section__eyebrow">Inspiration</p>
          <h2 className="section__title">Popular recipes to get you started</h2>
          <p className="section__subtitle">
            Explore what others are cooking — then save your favorites to your
            collection.
          </p>
        </div>
        <div className="recipes-grid">
          {featuredRecipes.map((recipe) => (
            <article className="recipe-preview" key={recipe.title}>
              <div className="recipe-preview__image">{recipe.emoji}</div>
              <div className="recipe-preview__body">
                <span className="recipe-preview__tag">{recipe.tag}</span>
                <h3 className="recipe-preview__title">{recipe.title}</h3>
                <p className="recipe-preview__time">{recipe.time}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta__inner">
          <h2 className="cta__title">Ready to build your cookbook?</h2>
          <p className="cta__subtitle">
            Join home cooks who keep their recipes organized, accessible, and always
            within reach.
          </p>
          <a className="btn btn--primary btn--lg btn--light" href="#">
            Create your free account
          </a>
        </div>
      </section> */}

      <footer className="footer">
        <div className="footer__brand">
          <span className="nav__logo-icon" aria-hidden="true">
            🍳
          </span>
          Recipe App
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Recipe App. Cook with joy.</p>
        <ul className="footer__links">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default LandingPage
