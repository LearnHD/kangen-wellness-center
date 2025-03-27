// Enhanced Chatbot Knowledge Base for Kangen Wellness Center

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Chatbot functionality
    const chatbotButton = document.querySelector('.chatbot-button');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotInput = document.querySelector('.chatbot-input input');
    const chatbotSend = document.querySelector('.chatbot-input button');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    
    // Comprehensive Knowledge Base for the chatbot
    const knowledgeBase = {
        // General Kangen Water Information
        "kangen water": "Kangen Water® is alkaline ionized water produced by Enagic's water ionizer machines. The term 'Kangen' means 'return to origin' in Japanese, reflecting the idea of returning the body to its original, healthy state. It has a pH typically between 8.5 and 9.5, and is rich in antioxidants with a negative ORP (Oxidation-Reduction Potential).",
        "what is kangen": "Kangen Water® is alkaline ionized water produced by Enagic's water ionizer machines. The term 'Kangen' means 'return to origin' in Japanese, reflecting the idea of returning the body to its original, healthy state. It has a pH typically between 8.5 and 9.5, and is rich in antioxidants with a negative ORP (Oxidation-Reduction Potential).",
        "alkaline water": "Alkaline water has a pH level above 7.0. Kangen Water® is a type of alkaline water produced through electrolysis, which not only makes it alkaline but also gives it antioxidant properties and a micro-clustered molecular structure. The pH of Kangen Water® typically ranges from 8.5 to 9.5, depending on the setting used.",
        
        // Benefits of Kangen Water
        "benefits": "The benefits of Kangen Water® include enhanced hydration due to micro-clustered water molecules, antioxidant properties from its negative ORP value, balanced pH levels to counteract acidic diets, improved digestion, and potential detoxification support. Many users also report increased energy levels and overall wellbeing.",
        "health benefits": "The health benefits of Kangen Water® include enhanced hydration due to micro-clustered water molecules, antioxidant properties from its negative ORP value, balanced pH levels to counteract acidic diets, improved digestion, and potential detoxification support. Many users also report increased energy levels and overall wellbeing.",
        "hydration": "Kangen Water® may provide enhanced hydration because its micro-clustered water molecules (5-6 molecules per cluster vs. 10-13 in regular water) can be more easily absorbed by your cells. Proper hydration is essential for all bodily functions, from digestion to brain function.",
        "antioxidant": "Kangen Water® has antioxidant properties due to its negative ORP (Oxidation-Reduction Potential) value, typically between -200 to -800 mV. This means it has an abundance of electrons available to donate, which can help neutralize harmful free radicals in the body and reduce oxidative stress.",
        "ph balance": "Kangen Water® has an alkaline pH (typically 8.5-9.5) which may help balance the body's pH levels. Modern diets often contain acidic foods that can disrupt this balance, and alkaline water may help counteract this effect.",
        
        // Scientific Information
        "science": "Kangen Water® is created through a process called electrolysis. When water passes through a Kangen Water machine, it flows over electrode plates charged with electrical current. This separates the water into alkaline water (higher pH) and acidic water (lower pH). The process also reduces the size of water molecule clusters and gives the water a negative ORP (Oxidation-Reduction Potential) value, indicating antioxidant properties.",
        "electrolysis": "Electrolysis is the process used to create Kangen Water®. When water passes through a Kangen Water machine, it flows over electrode plates charged with electrical current. This separates the water into alkaline water (higher pH) and acidic water (lower pH). The process also reduces the size of water molecule clusters and gives the water a negative ORP value.",
        "orp": "ORP stands for Oxidation-Reduction Potential, which measures the ability of a substance to either oxidize or reduce another substance. Kangen Water® has a negative ORP value (typically between -200 to -800 mV), indicating it has an abundance of electrons available to donate. These electrons can neutralize free radicals (which are electron thieves) in the body. Regular tap water and bottled water typically have a positive ORP value (+200 to +500 mV).",
        "micro clustering": "Micro-clustering refers to the reduced size of water molecule clusters in Kangen Water®. The electrolysis process reduces the size from 10-13 molecules per cluster (in regular water) to 5-6 molecules per cluster. This smaller cluster size may allow the water to penetrate cells more efficiently, potentially improving hydration and nutrient delivery.",
        
        // Types of Kangen Water
        "types of water": "Kangen Water machines produce various types of water for different uses: 1) Strong Kangen Water (pH 11.0+) for food preparation and cleaning, 2) Kangen Water (pH 8.5-9.5) for daily drinking, 3) Neutral Water (pH 7.0) for taking medication and baby formula, 4) Beauty Water (pH 4.0-6.0) for skin care, and 5) Strong Acidic Water (pH 2.5) for sanitizing.",
        "strong kangen water": "Strong Kangen Water (pH 11.0+) is not for drinking. It's used for food preparation (removing pesticides from fruits and vegetables) and cleaning (removing tough stains).",
        "beauty water": "Beauty Water (pH 4.0-6.0) is not for drinking. It's used as a facial toner to tighten pores, as a hair rinse to add shine and softness, and for gentle cleaning of delicate surfaces.",
        "strong acidic water": "Strong Acidic Water (pH 2.5) is not for drinking. It's used for sanitizing surfaces, cleaning cutting boards and kitchen utensils, and hand washing.",
        "neutral water": "Neutral Water (pH 7.0) is used for taking medication (to ensure the medication's effectiveness is not altered by alkaline water), preparing baby formula, and for those with specific health conditions who should not drink alkaline water.",
        
        // Kangen Water Machines
        "machines": "Enagic offers various Kangen Water machines including the Leveluk K8 (8 platinum-dipped titanium plates), SD501 (7 plates, flagship model), SD501 Platinum (multilingual), SUPER501 (large capacity), JrIV (4 plates, energy-efficient), and SD501U (under-counter model). Each has different features and capabilities to suit various needs and budgets.",
        "k8": "The Leveluk K8 is Enagic's most powerful antioxidant machine, featuring 8 platinum-dipped titanium plates for superior water ionization. The additional electrode plate increases the electrolysis surface area, improves water ionization, and heightens the antioxidant production potential. It includes an automatic cleaning system, LCD display with voice prompts, and comes with a 5-year warranty.",
        "sd501": "The Leveluk SD501 is Enagic's flagship model with an industry-leading continuous ionized electrolysis water generator system. It features 7 solid platinum-coated titanium plates, a large LCD panel with voice prompts, built-in electrolysis enhancer, automatic cleaning system, and a 5-year warranty.",
        "jr": "The Leveluk JrIV features 4 electrode plates which reduces energy consumption. Due to the solid platinum-coated titanium plates, this unit can still produce strong acid and strong Kangen waters. It's recommended for singles or couples due to its lower power consumption and fewer plates. It includes an automatic cleaning system and comes with a 3-year warranty.",
        "sd501u": "The Leveluk SD501U offers all the power of the SD501 right at your kitchen sink without sacrificing valuable counter space. It features a fully functional compact LCD wall-mounted control panel, 7 solid platinum-coated titanium plates, automatic cleaning system, and a 5-year warranty.",
        
        // eMguard Information
        "emguard": "The eMguard is an Environment Harmoniser designed to reduce the negative effects of electromagnetic noise radiation emitted from devices around you. This patented technology achieves a balanced atmosphere by suppressing targeted electromagnetic noise radiation disturbances up to 1 GHz (between 3MHz to 1000MHz) and provides protection within an 8-meter diameter (4-meter radius).",
        "emf": "EMF stands for Electromagnetic Field. The eMguard is designed to harmonise targeted high frequency electromagnetic noise radiation up to 1 GHz (between 3MHz to 1000MHz), providing protection within an 8-meter diameter (4-meter radius). It features an indicator light that shows when you are protected.",
        
        // Ukon Products
        "ukon": "Kangen UKON is a healthy antioxidant turmeric supplement from Okinawa, Japan, produced by Enagic. Ukon™ (wild turmeric) has been cultivated and consumed for thousands of years due to its beneficial antioxidant properties. It contains curcumin, healthy minerals, olive oil, perilla oil, flaxseed oil, evening primrose oil, tocotrienol, and turmeric essential oils.",
        "turmeric": "Ukon is Enagic's turmeric supplement grown in Yanbaru (the northern tip of Okinawa), Japan. It's 100% free of harmful chemicals used in conventional turmeric farming and is cleansed and sanitized by Strong Kangen Water® and Strong Acidic Water. The supplement contains curcumin (the active compound in turmeric), which is a free radical scavenger and antioxidant.",
        
        // Water Filters
        "filters": "We stock and sell genuine water filters for all makes and models of Kangen Water machines. Filters should typically be replaced every 6-12 months (approximately every 6000L of water). Your machine will alert you when replacement is needed. We offer both filter sales and professional installation services to ensure your machine maintains optimal performance. Visit our center or contact us for current filter pricing and availability.",
        "filter replacement": "We offer professional filter replacement services to ensure your machine continues to produce the highest quality water. The service includes removal of old filter, installation of new genuine filter, system reset, and water quality testing. You can also purchase filters for self-installation. Contact us for current filter pricing and service scheduling.",
        
        // Maintenance and Cleaning
        "maintenance": "We provide comprehensive maintenance services including: 1) Professional deep cleaning service (recommended 1-2 times per year), 2) Filter replacement service, 3) Water quality testing, and 4) General maintenance advice. Regular maintenance ensures your machine continues to produce the highest quality Kangen Water.",
        "cleaning": "Our professional deep cleaning service is essential for maintaining your machine's performance. The service includes: 1) Thorough internal cleaning to remove mineral buildup, 2) Cleaning of electrolysis chamber and plates, 3) Clearing blockages from hoses, 4) Water quality testing, and 5) Basic system inspection. We recommend deep cleaning 1-2 times per year. Contact us to schedule a service appointment.",
        "e-clean": "E-cleaning is a maintenance process that helps remove mineral clusters that stick to the electrode plates in your Kangen Water machine. It's recommended to perform an e-clean every 2-4 weeks. For areas with high mineral content water, change the setting to 'beauty water' and run water gently for 2-3 minutes to help remove mineral buildup.",
        
        // Services
        "demo": "We offer free demonstrations of Kangen Water machines at our center. During a demo, you'll receive an introduction to Kangen Water technology and the ionization process, see demonstrations of different water types produced by the machines, have the opportunity to taste Kangen Water, see pH testing demonstrations, learn about machine features and benefits, and have all your questions answered by our knowledgeable staff.",
        "services": "We offer various services including Kangen Water machine demonstrations, eMguard demonstrations, professional deep cleaning services, filter replacement services, and personalized wellness consultations. Visit our center or contact us to learn more about these services.",
        "consultation": "Our wellness consultations provide personalized guidance to help you integrate Kangen Water and other wellness products into your health routine. Our knowledgeable consultants will work with you to understand your specific health goals and create a customized plan.",
        
        // Usage Questions
        "how much": "It's generally recommended to drink half your body weight in ounces of water daily. For example, if you weigh 150 pounds, aim for 75 ounces of water. When starting with Kangen Water, it's advisable to begin with a lower pH (8.5) and gradually increase to higher pH levels (9.0-9.5) as your body adjusts.",
        "children": "Yes, children can drink Kangen Water. It's recommended to start with a lower pH level (8.5) and adjust based on the child's age and needs. For infants and baby formula, it's best to use Neutral Water (pH 7.0).",
        "medication": "It's recommended to take medication with Neutral Water (pH 7.0) rather than alkaline Kangen Water. This ensures that the medication's effectiveness is not altered by the alkaline properties of Kangen Water.",
        "how long": "The alkaline properties of Kangen Water are most potent when the water is fresh. It's best to drink it within 24-48 hours of production. To maintain its properties, store Kangen Water in a clean, airtight glass container away from direct sunlight.",
        "cooking": "Yes, cooking with Kangen Water (pH 8.5-9.5) can enhance the flavor of foods and reduce bitterness. It's excellent for soups, stews, rice, and vegetables. Many users report that coffee and tea taste better when made with Kangen Water.",
        "pets": "Yes, pets can benefit from drinking Kangen Water. Start with a lower pH level (8.5) and observe how your pet responds. Many pet owners report improvements in their pets' hydration, energy levels, and overall health.",
        
        // Location and Contact
        "location": "We are located at 15 Cedar Pointe Drive in Barrie, Ontario. Our business hours are Monday to Friday 9:00 AM - 6:00 PM, Saturday 10:00 AM - 4:00 PM, and we are closed on Sundays.",
        "hours": "Our business hours are Monday to Friday 9:00 AM - 6:00 PM, Saturday 10:00 AM - 4:00 PM, and we are closed on Sundays.",
        "contact": "You can contact us at (705) 555-1234, email us at info@kangenwellnessbarrie.com, or visit our center at 15 Cedar Pointe Drive in Barrie, Ontario.",
        "appointment": "While walk-ins are welcome during our business hours, we recommend scheduling an appointment for demonstrations, consultations, or services to ensure that our staff can provide you with their full attention. You can schedule an appointment by calling us at (705) 555-1234 or using the contact form on our website.",
        
        // Price Information (Compliant with Enagic rules)
        "price": "For pricing information on our Kangen Water machines and products, please visit our center at 15 Cedar Pointe Drive, Barrie, or contact us at (705) 555-1234. We'd be happy to discuss options that fit your needs and budget.",
        "cost": "For information about the cost of our Kangen Water machines, products, and services, please visit our center at 15 Cedar Pointe Drive, Barrie, or contact us at (705) 555-1234. We'd be happy to provide you with detailed pricing information in person or over the phone.",
        "how much does it cost": "For pricing information on our Kangen Water machines and products, please visit our center at 15 Cedar Pointe Drive, Barrie, or contact us at (705) 555-1234. We'd be happy to discuss options that fit your needs and budget.",
        
        // Comparison Questions
        "difference": "Kangen Water® differs from regular water in several ways: 1) It has an alkaline pH (8.5-9.5) compared to tap water's neutral or slightly acidic pH, 2) It has a negative ORP value (-200 to -800 mV) indicating antioxidant properties, while tap water has a positive ORP, 3) It has a micro-clustered molecular structure for potentially better hydration, and 4) It's produced through electrolysis which separates the water into alkaline and acidic components.",
        "bottled water": "Kangen Water® differs from bottled water in several important ways: 1) Kangen Water® is freshly produced at home, while bottled water may sit for months before consumption, 2) Kangen Water® has antioxidant properties (negative ORP) while bottled water typically has a positive ORP, 3) Kangen Water® has a micro-clustered molecular structure, and 4) Kangen Water® is more environmentally friendly as it eliminates plastic bottle waste.",
        "tap water": "Kangen Water® differs from tap water in several ways: 1) It has an alkaline pH (8.5-9.5) compared to tap water's neutral or slightly acidic pH, 2) It has a negative ORP value (-200 to -800 mV) indicating antioxidant properties, while tap water has a positive ORP, 3) It has a micro-clustered molecular structure for potentially better hydration, and 4) It's produced through electrolysis which removes chlorine and many contaminants found in tap water.",
        
        // Miscellaneous
        "hello": "Hello! I'm here to help you with information about Kangen Water, our machines, filters, and services including professional deep cleaning. What would you like to know?",
        "hi": "Hi! I can help you with information about Kangen Water, our machines, filters, and services including professional deep cleaning. What would you like to know?",
        "thank you": "You're welcome! Is there anything else I can help you with regarding Kangen Water or our products and services?",
        "thanks": "You're welcome! Is there anything else I can help you with regarding Kangen Water or our products and services?",
        "bye": "Thank you for chatting with me! If you have any more questions about Kangen Water or our products and services, feel free to ask anytime. Have a great day!",
        "goodbye": "Thank you for chatting with me! If you have any more questions about Kangen Water or our products and services, feel free to ask anytime. Have a great day!"
    };
    
    // Advanced response function with keyword matching
    function getBotResponse(userInput) {
        userInput = userInput.toLowerCase();
        
        // Check for exact matches first
        if (knowledgeBase[userInput]) {
            return knowledgeBase[userInput];
        }
        
        // Check for partial matches
        for (const key in knowledgeBase) {
            if (userInput.includes(key)) {
                return knowledgeBase[key];
            }
        }
        
        // Check for question patterns
        if (userInput.includes("what is") || userInput.includes("tell me about") || userInput.includes("explain")) {
            for (const key in knowledgeBase) {
                const keyWords = key.split(" ");
                for (const word of keyWords) {
                    if (word.length > 3 && userInput.includes(word)) {
                        return knowledgeBase[key];
                    }
                }
            }
        }
        
        // Default responses if no match found
        const defaultResponses = [
            "Thank you for your question about " + userInput + ". For more detailed information on this topic, please visit our center or contact us directly at (705) 555-1234.",
            "I'd be happy to help with your question about " + userInput + ". For the most accurate information, please visit our center at 15 Cedar Pointe Drive, Barrie, or call us at (705) 555-1234.",
            "Great question about " + userInput + "! This is something our team would be happy to discuss in detail. Please contact us at (705) 555-1234 or visit our center.",
            "I appreciate your interest in " + userInput + ". To learn more about this topic, please visit our center or browse the resources section of our website for detailed information."
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
    
    // Toggle chatbot window
    if (chatbotButton) {
        chatbotButton.addEventListener('click', function() {
            chatbotWindow.style.display = 'flex';
        });
    }
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotWindow.style.display = 'none';
        });
    }
    
    // Send message function
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        
        if (userMessage !== '') {
            // Add user message to chat
            const userDiv = document.createElement('div');
            userDiv.className = 'message message-user';
            userDiv.innerHTML = `<p>${userMessage}</p>`;
            chatbotMessages.appendChild(userDiv);
            
            // Clear input
            chatbotInput.value = '';
            
            // Scroll to bottom
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            
            // Get and display bot response after a short delay
            setTimeout(function() {
                const botResponse = getBotResponse(userMessage);
                const botDiv = document.createElement('div');
                botDiv.className = 'message message-bot';
                botDiv.innerHTML = `<p>${botResponse}</p>`;
                chatbotMessages.appendChild(botDiv);
                
                // Scroll to bottom again
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }, 500);
        }
    }
    
    // Send message on button click
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }
    
    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate-fadeIn');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check if elements are in view on load and scroll
    window.addEventListener('load', checkIfInView);
    window.addEventListener('scroll', checkIfInView);
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
