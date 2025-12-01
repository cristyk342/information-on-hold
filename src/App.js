import React, { useState } from 'react';
import { Phone, MessageCircle, Users, TrendingUp, Mic, Music, FileText, Award, Mail, MapPin, Clock, ChevronLeft, ChevronRight, Heart, Scale, Pill, Bone, Bell, UserCheck, Smile, ShoppingBag } from 'lucide-react';

export default function InformationOnHoldWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showPopup, setShowPopup] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'messaging', label: 'On-Hold Messaging' },
    { id: 'work', label: 'Our Work' },
    { id: 'industries', label: 'Industries' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  // Show popup after 2 minutes
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 120000); // 120000ms = 2 minutes

    return () => clearTimeout(timer);
  }, []);

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section
        className="h-screen relative flex items-center overflow-hidden"
      >
        {/* Blurred background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-sm"
          style={{
            backgroundImage: "url('/hero-phone-call.jpg')"
          }}
        ></div>

        {/* Dark grey overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-start">
            <div className="max-w-lg text-left">
              <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
                Professional On-Hold Messaging Services
              </h2>
              <p className="text-2xl text-white mb-8 leading-relaxed">
                Transform hold time into marketing opportunities with custom voice over recordings and professional on-hold messages.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-lime-500 text-white px-10 py-4 rounded-full font-semibold text-xl hover:bg-lime-600 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold text-white mb-6">
            Enhance Customer Experience with Professional Phone Messaging
          </h2>
          <p className="text-3xl text-gray-200 max-w-3xl mx-auto">
            Since 1994, Information On Hold has been America's trusted provider of custom on-hold messaging solutions for businesses nationwide.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                Engage & Inform Customers
              </h3>
              <p className="text-xl text-gray-600">
                Turn hold time into marketing opportunities by promoting services, announcing specials, and sharing updates with waiting callers.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                Reduce Call Abandonment
              </h3>
              <p className="text-xl text-gray-600">
                Professional music and messaging reduce hangups by up to 70% during peak times, keeping callers engaged and connected.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                Professional Brand Image
              </h3>
              <p className="text-xl text-gray-600">
                Custom voice talent and royalty-free music create a polished impression that builds customer confidence and trust.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                Increase Revenue Opportunities
              </h3>
              <p className="text-xl text-gray-600">
                Strategic messaging promotes complementary services and products, generating additional sales from your existing callers.
              </p>
            </div>

          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setCurrentPage('messaging')}
              className="bg-lime-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-lime-600 transition-colors"
            >
              View on-hold messaging service
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-8">
                Specialized On-Hold Messaging by Industry
              </h2>
              <p className="text-2xl text-gray-200 mb-8">
                With over 30 years serving businesses nationwide, we've developed specialized expertise creating custom on-hold messages for:
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-white mb-2">Veterinarian Clinics</h3>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-white mb-2">Funeral Homes and Cemeteries</h3>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-white mb-2">Pharmacies</h3>
                </div>
              </div>
              <button
                onClick={() => setCurrentPage('industries')}
                className="bg-lime-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-lime-600 transition-colors"
              >
                LEARN MORE
              </button>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <img
                src="/phonesuit.webp"
                alt="Industries we serve"
                className="w-full h-auto rounded-lg shadow-lg max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 bg-lime-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Voice Over Portfolio & Script Examples
          </h2>
          <p className="text-2xl text-white mb-8 max-w-3xl mx-auto">
            Listen to professionally produced on-hold messages from our extensive portfolio featuring hundreds of custom scripts and voice recordings for businesses nationwide.
          </p>

          {/* Audio Player Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Listen to a Sample Script</h3>
            <p className="text-gray-600 mb-6">Professional on-hold messaging for a veterinary clinic</p>

            <div className="bg-gray-100 p-6 rounded-lg">
              <audio
                controls
                className="w-full mb-4"
                preload="none"
              >
                <source src="/sample-script.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-gray-500">
                Audio sample coming soon - Professional voice over with background music
              </p>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage('work')}
            className="bg-white text-lime-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            LEARN MORE
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Start Your Professional On-Hold Messaging Today
              </h2>
              <p className="text-2xl text-gray-200">
                Get a free consultation from our experienced team. Request a custom quote or call us directly at 800-849-9098 to discuss your on-hold messaging needs.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                      <input
                        type="text"
                        placeholder="Your First Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                      <input
                        type="text"
                        placeholder="Your Last Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      placeholder="youremail@email.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      placeholder="555-555-5555"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                    <textarea
                      placeholder="How can we help you?"
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button className="w-full bg-lime-500 text-white py-3 rounded-full font-semibold hover:bg-lime-600 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const MessagingPage = () => (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">Custom On-Hold Messaging Solutions</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional voice over recordings with royalty-free music keep customers engaged and informed during phone hold times.
              </p>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <img
                src="/messaging-hero-image.jpg"
                alt="On-Hold Messaging"
                className="w-full h-auto rounded-lg shadow-lg max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">Professional On-Hold Messaging Service</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-lime-600" />
              </div>
              <h4 className="text-3xl font-semibold text-gray-800 mb-3">Customized Business Messaging</h4>
              <p className="text-xl text-gray-600">
                Tailored content featuring your services, promotions, hours, and business updates aligned with your brand voice.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-lime-600" />
              </div>
              <h4 className="text-3xl font-semibold text-gray-800 mb-3">Professional Voice Talent</h4>
              <p className="text-xl text-gray-600">
                Experienced voice over artists deliver studio quality recordings that match your brand's tone, from friendly to authoritative.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-lime-600" />
              </div>
              <h4 className="text-3xl font-semibold text-gray-800 mb-3">Expert Scriptwriting</h4>
              <p className="text-xl text-gray-600">
                Our copywriters craft compelling, industry-specific scripts that communicate your message clearly and keep listeners engaged.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-lime-600" />
              </div>
              <h4 className="text-3xl font-semibold text-gray-800 mb-3">100% Legal Royalty-Free Music</h4>
              <p className="text-xl text-gray-600">
                Licensed, royalty-free music from premium libraries ensures full legal compliance and professional sound quality.
              </p>
            </div>
          </div>
        </div>

        </div>
      </section>

      {/* Experienced Staff Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <h3 className="text-5xl font-bold text-white mb-6">30+ Years of Industry Expertise</h3>
              <p className="text-2xl text-gray-200 mb-6 leading-relaxed">
                Since 1994, our experienced team has created custom on-hold messaging for thousands of businesses nationwide, with specialized expertise in veterinary clinics, funeral homes, cemeteries, and pharmacies.
              </p>
              <button
                onClick={() => setCurrentPage('about')}
                className="bg-lime-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-lime-600 transition-colors"
              >
                Learn More
              </button>
            </div>

            {/* Right side - EST 1994 */}
            <div className="flex items-center justify-center text-center">
              <div className="text-2xl font-semibold text-lime-500 mr-4">EST</div>
              <div className="text-9xl font-bold text-lime-500 leading-none">1994</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold text-white mb-8">Our Process</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 - Discovery */}
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">Discovery & Consultation</h4>
              <p className="text-xl text-gray-200">
                Our team learns about your business goals, target audience, and key messages to create the most effective on-hold strategy for your needs.
              </p>
            </div>

            {/* Step 2 - Creative */}
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">Script & Production</h4>
              <p className="text-xl text-gray-200">
                Professional scriptwriters and voice talent create your custom message, combining compelling copy with studio-quality recording and appropriate music selection.
              </p>
            </div>

            {/* Step 3 - Launch */}
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">Implementation & Launch</h4>
              <p className="text-xl text-gray-200">
                Once you approve the final recording, we provide technical support to seamlessly integrate your professional on-hold message into your phone system.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-lime-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-600 transition-colors"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </section>
    </>
  );

  const ExampleScriptsCarousel = () => {
    const [currentScript, setCurrentScript] = useState(0);

    const scripts = [
      {
        title: "Funeral Home and Cemetery & Cremation Service Example",
        content: "We have years of experience caring for families, from all walks of life. Each family comes to us because they know we are leaders in our profession, dedicated to excellence in service, and have the highest integrity. Our experienced and dedicated staff can guide you in determining which service is appropriate for suiting your family's needs. We are committed to arranging a funeral that is most befitting to your loved one, and we strive to celebrate their life in a meaningful way. We are locally owned and we truly care about the families we serve"
      },
      {
        title: "Pet Care Company Example",
        content: "Pets can develop a number of dental problems. Sometimes, baby teeth are retained that cause problems in the mouth. Chewing on bones, rocks or other hard objects may break a tooth. In some cases, teeth become misaligned, making chewing difficult. Some animals develop abscesses in their teeth, which can be very painful. Congenital problems of the teeth or palate can occur. And animals develop tartar on their teeth just as humans do, which should be removed to prevent gum disease and tooth loss. Your Vet Is Your Partner in Your Pet's Dental Health. Make sure to schedule a dental exam with us."
      },
      {
        title: "Pharmacist Example",
        content: "Do you need to buy someone a gift? You are sure to find exactly what you are looking for at Adams Drug Store and Gifts. Drop by today and see our selection of gifts. Just tell one of our associates what you are looking for and they we will be more than happy to assist you with that perfect gift. We feature a large selection of gift items for all occasions including weddings, birthdays, anniversaries or just to say I'm thinking of you. Our hours are Monday through Friday 9am to 6:00pm and on Saturdays from 9am to 12 noon. We look forward to assisting you."
      },
      {
        title: "Hotel Example",
        content: "Spacious suites with oversized desk areas provide perfect space for working or relaxing. All rooms are suites designed to give the guest the comforts of being at home, including a kitchen with a full refrigerator, dishwasher, garbage disposal, 2 burner stovetop, microwave, dishes and utensils. Borrow a complimentary DVD from the front desk, relax enjoy on our flat panel TV's. Pop some popcorn in your microwave and relax in our room's recliner."
      }
    ];

    const nextScript = () => {
      setCurrentScript((prev) => (prev + 1) % scripts.length);
    };

    const prevScript = () => {
      setCurrentScript((prev) => (prev - 1 + scripts.length) % scripts.length);
    };

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevScript}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-lime-500 text-white p-2 rounded-full hover:bg-lime-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextScript}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-lime-500 text-white p-2 rounded-full hover:bg-lime-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Script Content */}
          <div className="px-16">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {scripts[currentScript].title}
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
              "{scripts[currentScript].content}"
            </p>

            {/* Request Full Script Button */}
            <div className="text-center">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-lime-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-lime-600 transition-colors"
              >
                Request Full Script
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {scripts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentScript(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentScript ? 'bg-lime-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const OurWorkPage = () => (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">Professional Voice Over Portfolio</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Explore our collection of industry-specific scripts and professional voice recordings that showcase quality on-hold messaging.
              </p>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <img
                src="/our-work-image.jpg"
                alt="Our Work"
                className="w-full h-auto rounded-lg shadow-lg max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Example Scripts Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold text-white mb-4">Sample On-Hold Message Scripts</h3>
          </div>

          <ExampleScriptsCarousel />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">On-Hold Messaging Portfolio by Industry</h3>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Listen to professional voice over samples demonstrating our custom on-hold messaging solutions across multiple industries.
            </p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-lime-600" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-3">Healthcare & Medical On-Hold Messages</h3>
            <p className="text-xl text-gray-600 mb-4">HIPAA-compliant messaging for medical practices, hospitals, clinics, and healthcare providers that educates patients and promotes services.</p>

            {/* Audio Player */}
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <audio
                controls
                className="w-full mb-2"
                preload="none"
              >
                <source src="/sample-healthcare.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-gray-500 text-center">
                Healthcare on-hold messaging sample
              </p>
            </div>

            <button className="w-full bg-lime-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-lime-700 transition-colors mt-auto">Request Custom Script →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mb-4">
              <Scale className="w-6 h-6 text-lime-600" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-3">Legal & Law Firm Messaging</h3>
            <p className="text-xl text-gray-600 mb-4">Authoritative, professional on-hold messages for attorneys, law firms, and legal practices that build credibility and explain services.</p>

            {/* Audio Player */}
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <audio
                controls
                className="w-full mb-2"
                preload="none"
              >
                <source src="/sample-legal.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-gray-500 text-center">
                Legal services on-hold messaging sample
              </p>
            </div>

            <button className="w-full bg-lime-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-lime-700 transition-colors mt-auto">Request Custom Script →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mb-4">
              <Bone className="w-6 h-6 text-lime-600" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-3">Veterinary Clinic On-Hold Messages</h3>
            <p className="text-xl text-gray-600 mb-4">Compassionate, informative messaging for veterinary clinics and animal hospitals that educates pet owners about services and care.</p>

            {/* Audio Player */}
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <audio
                controls
                className="w-full mb-2"
                preload="none"
              >
                <source src="/sample-veterinary.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-gray-500 text-center">
                Veterinary on-hold messaging sample
              </p>
            </div>

            <button className="w-full bg-lime-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-lime-700 transition-colors mt-auto">Request Custom Script →</button>
          </div>
        </div>
        </div>
      </section>
    </>
  );

  const IndustriesCarousel = () => {
    const [currentIndustry, setCurrentIndustry] = useState(0);

    const industries = [
      {
        title: "Veterinarian Clinics",
        image: "/vet-german-shepherd.jpg",
        description: "Every pet deserves professional veterinary care and every family deserves peace of mind. Your on-hold message transforms wait time into an opportunity to reassure families they've chosen the right clinic while highlighting your full range of services from wellness check-ups to grooming. Custom veterinary on-hold messaging keeps callers engaged and comforted, turning hold time into a moment of trust and reassurance that reminds families their pets are in good hands.",
        highlight: "Professional veterinary messaging reduces call abandonment while educating pet owners about preventive care, dental services, grooming, boarding options, and specialty treatments. Build client confidence and promote your complete veterinary services during every call.",
        icon: <Bone className="w-8 h-8 text-lime-600" />
      },
      {
        title: "Funeral Homes and Cemeteries",
        image: "/funeral-home-image.webp",
        description: "Every family deserves compassionate guidance during life's most difficult moments. When families call your funeral home, they're often overwhelmed and seeking reassurance. Your on-hold message is more than background sound. It's an opportunity to provide comfort through gentle music and caring narration while sharing information about pre-planning options, cremation services, memorial personalization, and grief support resources. Professional funeral home messaging transforms hold time into a moment of reassurance, reminding families they've chosen a trusted partner who will honor their loved one with dignity and respect.",
        highlight: "Sensitive, compassionate messaging provides comfort while educating families about service options, payment plans, veteran benefits, memorial personalization, pre-planning advantages, and grief counseling resources. Build trust and demonstrate your commitment to serving families with care during their time of need.",
        icon: <Heart className="w-8 h-8 text-lime-600" />
      },
      {
        title: "Pharmacies",
        image: "/pharmacy-image.jpg",
        description: "Many families pick up prescriptions while on the go and often the pharmacist is busy preparing orders. That short window of hold time is the perfect opportunity to share helpful health information, promote services like blood pressure checks, diabetes counseling, and weight management, and remind families about flu shots and other vaccines. Personalized pharmacy on-hold messaging transforms wait time into care time, showing families you're here for their total wellness.",
        highlight: "Maximize every call to promote immunizations, medication therapy management, compounding services, diabetes education, blood pressure screenings, weight management programs, and medication synchronization. Professional pharmacy messaging keeps callers engaged while educating them about your complete health and wellness services.",
        icon: <Pill className="w-8 h-8 text-lime-600" />
      }
    ];

    const nextIndustry = React.useCallback(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, [industries.length]);

    const prevIndustry = () => {
      setCurrentIndustry((prev) => (prev - 1 + industries.length) % industries.length);
    };

    // Auto-advance carousel every 8 seconds
    React.useEffect(() => {
      const interval = setInterval(nextIndustry, 8000);
      return () => clearInterval(interval);
    }, [nextIndustry]);

    return (
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevIndustry}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-lime-500 text-white p-3 rounded-full hover:bg-lime-600 transition-all duration-300 z-10 shadow-lg hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextIndustry}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-lime-500 text-white p-3 rounded-full hover:bg-lime-600 transition-all duration-300 z-10 shadow-lg hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Content */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndustry * 100}%)` }}
            >
              {industries.map((industry, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                    {/* Left side - Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center">
                          {industry.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800">{industry.title}</h3>
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed">
                        {industry.description}
                      </p>

                      <p className="text-lime-600 text-lg leading-relaxed font-medium bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                        {industry.highlight}
                      </p>

                      <button
                        onClick={() => setCurrentPage('contact')}
                        className="bg-lime-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-lime-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Get Started Today
                      </button>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <img
                          src={industry.image}
                          alt={`${industry.title} professional services`}
                          className="w-full h-auto rounded-lg shadow-2xl max-w-md transform transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center py-6 space-x-3">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndustry(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndustry
                    ? 'bg-lime-500 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div
              className="h-full bg-lime-500 transition-all duration-700 ease-in-out"
              style={{ width: `${((currentIndustry + 1) / industries.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  const IndustriesPage = () => (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Text */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">Industry-Specific On-Hold Messaging Experts</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                We create custom on-hold messages for businesses nationwide, with specialized expertise in veterinary clinics, funeral homes, cemeteries, and pharmacies.
              </p>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <img
                src="/funeralhome.jpg"
                alt="Funeral home and cemetery services"
                className="w-full h-auto rounded-lg shadow-lg max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Carousel Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <IndustriesCarousel />
        </div>
      </section>
    </>
  );

  const AboutPage = () => (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Text */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">About Information On Hold</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                America's trusted on-hold messaging provider since 1994, specializing in professional voice over recordings and custom phone messaging solutions.
              </p>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <img
                src="/about-image.jpg"
                alt="Smiley woman doing podcast with microphone and laptop"
                className="w-full h-auto rounded-lg shadow-lg max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Setup On-Hold Messaging Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold text-white mb-4">Why Setup On-Hold Messaging?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Inform Your Customers */}
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-300 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gray-800 mb-3 text-center">Inform Your Customers</h4>
                <p className="text-xl text-gray-600 text-center leading-relaxed">
                  Share important company updates, seasonal promotions, or special offers while your customer is on the line. Every call becomes an opportunity to deliver timely information.
                </p>
              </div>
            </div>

            {/* Keep Them on the Line */}
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-lime-600">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gray-800 mb-3 text-center">Keep Them on the Line</h4>
                <p className="text-xl text-gray-600 text-center leading-relaxed">
                  Prevent losing your customers or prospects while they wait to be attended to. Engaging content maintains interest and demonstrates that you value their time and business.
                </p>
              </div>
            </div>

            {/* Improve Your Customer Experience */}
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smile className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gray-800 mb-3 text-center">Improve Customer Experience</h4>
                <p className="text-xl text-gray-600 text-center leading-relaxed">
                  Entertain and inform your customers with professional messaging that reflects your brand standards. Create positive impressions during every phone interaction.
                </p>
              </div>
            </div>

            {/* Always Cross Sell Items */}
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-600">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gray-800 mb-3 text-center">Always Cross Sell Items</h4>
                <p className="text-xl text-gray-600 text-center leading-relaxed">
                  Inform your customers about different product or service options they may need for their situation. Strategic suggestions introduce additional revenue streams and opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center space-x-3 bg-lime-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-lime-600"
            >
              <Phone className="w-6 h-6" />
              <span>Start Your On-Hold Messaging Today</span>
            </button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                For over 25 years, Information On Hold has been dedicated to helping businesses improve their customer experience through professional on-hold messaging. We understand that every moment your customer spends on hold is an opportunity to inform, engage, and build trust.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced voice over artists, script writers, and audio engineers work together to create custom messaging that reflects your brand's personality and values.
              </p>
            </div>
            <div className="bg-lime-500 p-8 rounded-lg">
              <h4 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0" />
                  Over 25 years of experience
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0" />
                  Professional voice over artists
                </li>
                <li className="flex items-start">
                  <Music className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0" />
                  100% legal, royalty-free music
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0" />
                  Custom messaging for every industry
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );

  const ContactPage = () => (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to improve your customer experience? Get in touch with us today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">Get Started Today</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-lime-600 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-white">Call Us</p>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-lime-500 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-white">Email Us</p>
                    <p className="text-gray-300">info@informationonhold.net</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-lime-500 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-white">Business Hours</p>
                    <p className="text-gray-300">Monday - Friday: 9AM - 5PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-3xl font-bold text-gray-800 mb-4">Request a Quote</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Industry</option>
                  <option value="veterinary">Veterinary Clinic</option>
                  <option value="funeral">Funeral Home and Cemetery</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="other">Other</option>
                </select>
                <textarea 
                  placeholder="Tell us about your needs..." 
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button className="w-full bg-lime-500 text-white py-3 rounded-full font-semibold hover:bg-lime-600 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'messaging': return <MessagingPage />;
      case 'work': return <OurWorkPage />;
      case 'industries': return <IndustriesPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white text-lime-600 py-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-shrink-0">
              {/* Replace with your logo file */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold text-blue-900">INFORMATION</h1>
                  <h2 className="text-2xl font-bold text-lime-500">ON HOLD</h2>
                </div>
                <div className="sm:hidden">
                  <h1 className="text-lg font-bold text-blue-900">INFORMATION</h1>
                  <h2 className="text-lg font-bold text-lime-500">ON HOLD</h2>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 text-lg font-semibold transition-colors border-b-2 ${
                    currentPage === item.id
                      ? 'text-lime-600 border-lime-600'
                      : 'text-lime-600 border-transparent hover:border-lime-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden ml-4">
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(e.target.value)}
                className="bg-lime-600 text-white border border-lime-600 rounded px-3 py-2 text-sm font-semibold min-w-0"
              >
                {navigation.map((item) => (
                  <option key={item.id} value={item.id}>{item.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      {renderPage()}

      {/* Call to Action */}
      {currentPage !== 'contact' && (
        <section className="bg-lime-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-4">Ready to Improve Your Customer Experience?</h2>
            <p className="text-2xl text-lime-200 mb-8">
              Let us help you create professional on-hold messaging that keeps customers engaged.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-lime-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-lime-400 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold">800-849-9098</p>
                <p>PO Box 48283</p>
                <p>Athens, GA 30604</p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xl font-bold text-lime-400 mb-4">Links</h3>
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className="block text-gray-300 hover:text-lime-400 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Promotional Section */}
            <div>
              <h3 className="text-xl font-bold text-lime-400 mb-4">Voice Over Work</h3>
              <p className="text-gray-300 mb-4">
                Would you like to know more about our voice over work? You can hear some examples and request a full script example! Plus if you sign up today, you will receive $100 off your first project.
              </p>
              <button
                onClick={() => setCurrentPage('work')}
                className="bg-lime-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-lime-600 transition-colors"
              >
                LEARN MORE ABOUT OUR WORK
              </button>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Information On Hold. Serving businesses since 1994.
            </p>
          </div>
        </div>
      </footer>

      {/* Promotional Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="mb-4">
                <Award className="w-16 h-16 text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Special Offer!
              </h3>
              <p className="text-xl text-white mb-6">
                Sign up today and receive <span className="font-bold text-2xl">$100 OFF</span> your first project!
              </p>
              <button
                onClick={() => {
                  setShowPopup(false);
                  setCurrentPage('contact');
                }}
                className="bg-white text-lime-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}