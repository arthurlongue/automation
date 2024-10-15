import './style.css'

const translations = {
  en: {
    title: 'WhatsApp Automation',
    subtitle: 'Boost Your Business with Smart Messaging',
    feature1: 'Automated Responses',
    feature2: 'Bulk Messaging',
    feature3: 'Analytics Dashboard',
    cta: 'Get Started',
    testimonialTitle: 'What Our Customers Say',
    pricingTitle: 'Flexible Pricing Plans',
    faqTitle: 'Frequently Asked Questions',
    contactTitle: 'Get in Touch',
  },
  pt: {
    title: 'Automação do WhatsApp',
    subtitle: 'Impulsione Seu Negócio com Mensagens Inteligentes',
    feature1: 'Respostas Automatizadas',
    feature2: 'Mensagens em Massa',
    feature3: 'Painel de Análise',
    cta: 'Começar',
    testimonialTitle: 'O Que Nossos Clientes Dizem',
    pricingTitle: 'Planos de Preços Flexíveis',
    faqTitle: 'Perguntas Frequentes',
    contactTitle: 'Entre em Contato',
  },
}

let currentLang = 'en'
let isDarkMode = false

function toggleDarkMode() {
  isDarkMode = !isDarkMode
  document.documentElement.classList.toggle('dark')
  updateDarkModeIcon()
}

function updateDarkModeIcon() {
  const darkModeIcon = document.getElementById('darkModeIcon')
  darkModeIcon.innerHTML = isDarkMode
    ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
    : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'pt' : 'en'
  updateContent()
  updateLanguageIcon()
}

function updateLanguageIcon() {
  const languageIcon = document.getElementById('languageIcon')
  languageIcon.textContent = currentLang.toUpperCase()
}

function updateContent() {
  const content = translations[currentLang]
  Object.keys(content).forEach(key => {
    const element = document.getElementById(key)
    if (element) {
      element.textContent = content[key]
    }
  })
}

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
    <header class="bg-white dark:bg-gray-800 shadow fixed w-full z-10">
      <nav class="container mx-auto px-6 py-3">
        <div class="flex justify-between items-center">
          <div class="text-xl font-semibold text-gray-800 dark:text-white">WhatsApp Pro</div>
          <div class="flex items-center">
            <button id="darkModeToggle" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 mr-4">
              <span id="darkModeIcon"></span>
            </button>
            <button id="languageToggle" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
              <span id="languageIcon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-6 py-8 pt-24">
      <h1 id="title" class="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"></h1>
      <p id="subtitle" class="text-xl text-center text-gray-600 dark:text-gray-300 mb-8"></p>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 id="feature1" class="text-xl font-semibold text-gray-800 dark:text-white mb-4"></h2>
          <p class="text-gray-600 dark:text-gray-300">Respond to customer inquiries instantly, 24/7.</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 id="feature2" class="text-xl font-semibold text-gray-800 dark:text-white mb-4"></h2>
          <p class="text-gray-600 dark:text-gray-300">Reach thousands of customers with a single click.</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 id="feature3" class="text-xl font-semibold text-gray-800 dark:text-white mb-4"></h2>
          <p class="text-gray-600 dark:text-gray-300">Track and analyze your messaging performance.</p>
        </div>
      </div>

      <div class="text-center mb-16">
        <button id="cta" class="btn btn-primary text-lg px-8 py-3"></button>
      </div>

      <section class="mb-16">
        <h2 id="testimonialTitle" class="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"></h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p class="text-gray-600 dark:text-gray-300 mb-4">"WhatsApp Automation has revolutionized our customer service. We've seen a 50% increase in response rates and a 30% reduction in resolution time."</p>
            <p class="font-semibold text-gray-800 dark:text-white">- Sarah Johnson, Customer Service Manager</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p class="text-gray-600 dark:text-gray-300 mb-4">"The bulk messaging feature has been a game-changer for our marketing campaigns. We've reached 10x more customers with personalized messages."</p>
            <p class="font-semibold text-gray-800 dark:text-white">- Mike Chen, Marketing Director</p>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <h2 id="pricingTitle" class="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"></h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Basic</h3>
            <p class="text-3xl font-bold mb-4 text-gray-800 dark:text-white">$29<span class="text-sm font-normal">/month</span></p>
            <ul class="text-gray-600 dark:text-gray-300 mb-6">
              <li class="mb-2">✓ 1,000 messages/month</li>
              <li class="mb-2">✓ Basic automation</li>
              <li class="mb-2">✓ 24/7 support</li>
            </ul>
            <button class="btn btn-primary w-full">Choose Plan</button>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-2 border-blue-500">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Pro</h3>
            <p class="text-3xl font-bold mb-4 text-gray-800 dark:text-white">$79<span class="text-sm font-normal">/month</span></p>
            <ul class="text-gray-600 dark:text-gray-300 mb-6">
              <li class="mb-2">✓ 10,000 messages/month</li>
              <li class="mb-2">✓ Advanced automation</li>
              <li class="mb-2">✓ Analytics dashboard</li>
              <li class="mb-2">✓ Priority support</li>
            </ul>
            <button class="btn btn-primary w-full">Choose Plan</button>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Enterprise</h3>
            <p class="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Custom</p>
            <ul class="text-gray-600 dark:text-gray-300 mb-6">
              <li class="mb-2">✓ Unlimited messages</li>
              <li class="mb-2">✓ Custom integrations</li>
              <li class="mb-2">✓ Dedicated account manager</li>
              <li class="mb-2">✓ 24/7 premium support</li>
            </ul>
            <button class="btn btn-primary w-full">Contact Sales</button>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <h2 id="faqTitle" class="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"></h2>
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">How does WhatsApp Automation work?</h3>
            <p class="text-gray-600 dark:text-gray-300">Our platform integrates with your WhatsApp Business account to automate responses, send bulk messages, and provide analytics on your messaging performance.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Is it compliant with WhatsApp's policies?</h3>
            <p class="text-gray-600 dark:text-gray-300">Yes, our platform is fully compliant with WhatsApp's Business API policies and terms of service.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Can I customize the automated responses?</h3>
            <p class="text-gray-600 dark:text-gray-300">Absolutely! Our platform allows you to create custom automated responses based on keywords, user input, or specific scenarios.</p>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <h2 id="contactTitle" class="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"></h2>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <form class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
            </div>
            <div>
              <button type="submit" class="btn btn-primary w-full">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 class="text-lg font-semibold mb-2">WhatsApp Pro</h3>
            <p class="text-sm">Empowering businesses with smart WhatsApp automation.</p>
          </div>
          <div class="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 class="text-lg font-semibold mb-2">Quick Links</h3>
            <ul class="text-sm">
              <li class="mb-1"><a href="#" class="hover:text-blue-400">Features</a></li>
              <li class="mb-1"><a href="#" class="hover:text-blue-400">Pricing</a></li>
              <li class="mb-1"><a href="#" class="hover:text-blue-400">FAQ</a></li>
              <li class="mb-1"><a href="#" class="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 class="text-lg font-semibold mb-2">Legal</h3>
            <ul class="text-sm">
              <li class="mb-1"><a href="#" class="hover:text-blue-400">Terms of Service</a></li>
              <li class="mb-1"><a href="#" class="hover:text-blue-400">Privacy Policy</a></li>
              <li class="mb-1"><a href="#" class="hover:text-blue-400">Cookie Policy</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/4">
            <h3 class="text-lg font-semibold mb-2">Connect</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-white hover:text-blue-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" class="text-white hover:text-blue-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" class="text-white hover:text-blue-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          © 2023 WhatsApp Pro. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
`

document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode)
document.getElementById('languageToggle').addEventListener('click', toggleLanguage)

updateContent()
updateDarkModeIcon()
updateLanguageIcon()