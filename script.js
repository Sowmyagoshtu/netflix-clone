    document.querySelectorAll('.FAQ__title').forEach(button => {
        button.addEventListener('click', () => {
            const faq = button.nextElementSibling;

            // Toggle the active class on the clicked FAQ
            faq.classList.toggle('active');

            // Toggle the icon between plus and minus
            const icon = button.querySelector('i');
            if (faq.classList.contains('active')) {
                faq.style.maxHeight = faq.scrollHeight + 'px';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                faq.style.maxHeight = null;
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
    document.getElementById('language-switcher').addEventListener('click', function () {
        const currentLanguage = document.getElementById('language').textContent;
        
        if (currentLanguage === 'English') {
            // Switch to Hindi
            document.getElementById('language').textContent = 'हिंदी';
            document.getElementById('hero-title').textContent = 'असीमित मूवीज, टीवी, शो और अधिक।';
            document.getElementById('hero-subtitle').textContent = 'कहीं भी देखें और कभी भी रद्द करें।';
            document.getElementById('hero-description').textContent = 'क्या आप तैयार हैं देखने के लिए? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।';
            document.getElementById('feature-1-title').textContent = 'अपने टीवी पर आनंद लें।';
            document.getElementById('feature-1-subtitle').textContent = 'स्मार्ट टीवी, प्ले स्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी, ब्लू-रे प्लेयर्स और अधिक पर देखें।';
            document.getElementById('feature-2-title').textContent = 'अपने शो ऑफ़लाइन देखने के लिए डाउनलोड करें।';
            document.getElementById('feature-2-subtitle').textContent = 'अपनी पसंदीदा शो को आसानी से सहेजें और देखने के लिए हमेशा कुछ ना कुछ हो।';
            document.getElementById('poster-title').textContent = 'अजीब बातें';
            document.getElementById('poster-subtitle').textContent = 'डाउनलोड हो रहा है...';
            document.getElementById('feature-3-title').textContent = 'हर जगह देखें।';
            document.getElementById('feature-3-subtitle').textContent = 'अपने फोन, टैबलेट, लैपटॉप और टीवी पर असीमित मूवीज और टीवी शो स्ट्रीम करें।';
            document.getElementById('feature-4-title').textContent = 'बच्चों के लिए प्रोफ़ाइल बनाएं।';
            document.getElementById('feature-4-subtitle').textContent = 'अपने पसंदीदा पात्रों के साथ बच्चों को रोमांचक जगह पर भेजें—यह आपकी सदस्यता के साथ निःशुल्क है।';
            document.getElementById('faq-heading').textContent = 'अक्सर पूछे जाने वाले प्रश्न';
            document.getElementById('faq-1-title').textContent = 'नेटफ्लिक्स क्या है?';
            document.getElementById('faq-2-title').textContent = 'नेटफ्लिक्स की लागत कितनी है?';
            document.getElementById('faq-3-title').textContent = 'मैं नेटफ्लिक्स के लिए कैसे साइन अप करूं?';
            document.getElementById('faq-4-title').textContent = 'मैं नेटफ्लिक्स पर कौन से उपकरणों का उपयोग करके देख सकता हूं?';
            document.getElementById('faq-5-title').textContent = 'क्या मैं एक ही समय में नेटफ्लिक्स पर कितने स्क्रीन देख सकता हूं?';
            document.getElementById('faq-6-title').textContent = 'यदि मैं अपना पासवर्ड भूल जाऊं तो क्या करना चाहिए?';
            document.getElementById('footer-row1').textContent = 'प्रश्न? 000-800-040-1843 पर कॉल करें';
            document.getElementById('signInBtn').textContent = 'साइन इन करें';
            document.getElementById('emailInput').placeholder = 'ईमेल पता';
            document.getElementById('emailInput2').placeholder = 'ईमेल पता';
            document.getElementById('getStartedBtn').textContent = 'शुरू करें';
            document.getElementById('getStartedBtn2').textContent = 'शुरू करें';
            document.getElementById('get-started-email').textContent = 'क्या आप तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।';
            document.getElementById('faq-1-content').textContent = 'नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो आपको स्मार्ट टीवी, फ़ोन और टैबलेट पर असीमित टीवी शो और मूवीज़ देखने की सुविधा देती है।';
            document.getElementById('faq-2-content').textContent = '₹ 199 से ₹ 799 प्रति माह तक की योजना। कोई अतिरिक्त शुल्क नहीं, कोई अनुबंध नहीं।';
            document.getElementById('faq-3-content').textContent = 'नेटफ्लिक्स के लिए साइन अप करने के लिए, हमारी होमपेज पर जाएं और "साइन अप" बटन पर क्लिक करें। आपको एक ईमेल पता प्रदान करना होगा और एक पासवर्ड बनाना होगा। अपनी सदस्यता पूरी करने के लिए संकेतों का पालन करें।';
            document.getElementById('faq-4-content').textContent = 'आप विभिन्न उपकरणों पर नेटफ्लिक्स देख सकते हैं, जिनमें स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप और गेमिंग कंसोल शामिल हैं। बस अपने उपकरण के ब्राउज़र पर नेटफ्लिक्स ऐप डाउनलोड करें या वेबसाइट पर जाएं।';
            document.getElementById('faq-5-content').textContent = 'एक ही समय में आप कितने स्क्रीन का उपयोग कर सकते हैं, यह आपकी सदस्यता योजना पर निर्भर करता है। बेसिक योजनाओं में एक स्क्रीन की अनुमति है, जबकि स्टैंडर्ड और प्रीमियम योजनाओं में क्रमशः दो और चार स्क्रीन की अनुमति होती है।';
            document.getElementById('faq-6-content').textContent = 'यदि आप अपना पासवर्ड भूल जाते हैं, तो लॉगिन पृष्ठ पर जाएं और "पासवर्ड भूल गए?" लिंक पर क्लिक करें। अपना पासवर्ड रीसेट करने के लिए निर्देशों का पालन करें।';
            document.getElementById('footer1').innerHTML = `
    <a href="#">FAQ</a>
    <a href="#">मीडिया सेंटर</a>
    <a href="#">गोपनीयता</a>
    <a href="#">संपर्क करें</a>`;
document.getElementById('footer2').innerHTML = `
    <a href="#">सहायता केंद्र</a>
    <a href="#">निवेशक संबंध</a>
    <a href="#">कानूनी प्रावधान</a>
    <a href="#">स्पीड टेस्ट</a>`;
document.getElementById('footer3').innerHTML = `
    <a href="#">खाता</a>
    <a href="#">कैरियर</a>
    <a href="#">कुकीज़ प्राथमिकताएँ</a>
    <a href="#">कॉर्पोरेट जानकारी</a>`;
document.getElementById('footer4').innerHTML = `
    <a href="#">उपहार कार्ड रिडीम करें</a>
    <a href="#">निजीकरण</a>
    <a href="#">कानूनी प्रावधान</a>
    <a href="#">नेटफ्लिक्स ओरिजिनल्स</a>`;
}
         else {
            // Switch to English
            document.getElementById('language').textContent = 'English';
            document.getElementById('hero-title').textContent = 'Unlimited movies, TV shows, and more.';
            document.getElementById('hero-subtitle').textContent = 'Watch anywhere. Cancel anytime.';
            document.getElementById('hero-description').textContent = 'Ready to watch? Enter your email to create or restart your membership.';
            document.getElementById('feature-1-title').textContent = 'Enjoy on your TV.';
            document.getElementById('feature-1-subtitle').textContent = 'Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.';
            document.getElementById('feature-2-title').textContent = 'Download your shows to watch offline.';
            document.getElementById('feature-2-subtitle').textContent = 'Save your favorites easily and always have something to watch.';
            document.getElementById('poster-title').textContent = 'Stranger Things';
            document.getElementById('poster-subtitle').textContent = 'Downloading...';
            document.getElementById('feature-3-title').textContent = 'Watch everywhere.';
            document.getElementById('feature-3-subtitle').textContent = 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.';
            document.getElementById('feature-4-title').textContent = 'Create profiles for kids.';
            document.getElementById('feature-4-subtitle').textContent = 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.';
            document.getElementById('faq-heading').textContent = 'Frequently Asked Questions';
            document.getElementById('faq-1-title').textContent = 'What is Netflix?';
            document.getElementById('faq-3-title').textContent = 'How do I sign up for Netflix?';
            document.getElementById('faq-2-title').textContent = 'How much does Netflix cost?';
            document.getElementById('faq-4-title').textContent = 'What devices can I use to watch Netflix?';
            document.getElementById('faq-5-title').textContent = 'How many screens can I watch Netflix on at the same time?';
            document.getElementById('faq-6-title').textContent = 'Can I cancel my subscription at any time?';
            document.getElementById('footer-row1').textContent = 'Questions? Call 000-800-040-1843';
            document.getElementById('signInBtn').textContent = 'Sign In';
            document.getElementById('emailInput').placeholder = 'Email address';
            document.getElementById('emailInput2').placeholder = 'Email address';
            document.getElementById('getStartedBtn').textContent = 'Get Started';
            document.getElementById('getStartedBtn2').textContent = 'Get Started';
            document.getElementById('get-started-email').textContent = 'Ready to watch? Enter your email to create or restart your membership.';
            document.getElementById('faq-1-content').textContent = 'Netflix is a streaming service that allows you to watch unlimited TV shows and movies on Smart TVs, phones, and tablets.';
            document.getElementById('faq-2-content').textContent = 'Plans range from ₹199 to ₹799 per month. No extra charges, no contracts.';
            document.getElementById('faq-3-content').textContent = 'To sign up for Netflix, visit our homepage and click on the "Sign Up" button. You will need to provide an email address and create a password. Follow the prompts to complete your subscription.';
            document.getElementById('faq-4-content').textContent = 'You can watch Netflix on various devices, including smartphones, tablets, smart TVs, laptops, and gaming consoles. Just download the Netflix app or visit the website on your device browser.';
            document.getElementById('faq-5-content').textContent = 'The number of screens you can use simultaneously depends on your subscription plan. Basic plans allow one screen, while standard and premium plans allow two and four screens, respectively.';
            document.getElementById('faq-6-content').textContent = 'Yes, you can cancel your Netflix subscription at any time. Simply go to your account settings, and follow the cancellation prompts. Your account will remain active until the end of your billing cycle.';
            document.getElementById('footer1').innerHTML = `
    <a href="#">FAQ</a>
    <a href="#">Media Center</a>
    <a href="#">Privacy</a>
    <a href="#">Contact Us</a>`;
document.getElementById('footer2').innerHTML = `
    <a href="#">Help Center</a>
    <a href="#">Investor Relations</a>
    <a href="#">Legal Notices</a>
    <a href="#">Speed Test</a>`;
document.getElementById('footer3').innerHTML = `
    <a href="#">Account</a>
    <a href="#">Careers</a>
    <a href="#">Cookie Preferences</a>
    <a href="#">Corporate Information</a>`;
document.getElementById('footer4').innerHTML = `
    <a href="#">Redeem Gift Cards</a>
    <a href="#">Personalization</a>
    <a href="#">Legal Notices</a>
    <a href="#">Netflix Originals</a>`;
         }     
    });
    document.getElementById('signInBtn').addEventListener('click', function () {
        window.location.href = 'signin.html'; // Redirect to the sign-in page
    });

