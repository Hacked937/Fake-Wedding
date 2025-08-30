import Eventlist from '../components/EventList'
import FAQs from '../components/FAQs'
import EventCarousel from '../components/FakeWeddingCarousel'

export default function Home() {
  return (
    <div>
      <div className="pt-8">
        <EventCarousel/>
      </div>
      
      {/* Hero Section */}
      <div >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            🎉 GoCrazy Events 🎉
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Your Ultimate Event Experience Partner
          </p>
          <p className="text-lg mb-8 opacity-90">
            From Fake weddings to DJ Parties,Fun Events to celebrations - we make every moment unforgettable!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-white/20 px-4 py-2 rounded-full">🎵 DJ Parties</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">💍 Fake Weddings</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🎉 Fun Events</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🎆 Celebrations</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose GoCrazy Events?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Fun Events</h3>
              <p className="text-gray-600">Apart from your boring life explore some very fun events in your city</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Quality events that fit your budget without compromising on experience</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Memorable Experiences</h3>
              <p className="text-gray-600">Creating unforgettable moments that you'll cherish forever</p>
            </div>
          </div>
        </div>
      </div>

      <Eventlist/>
      <FAQs/>
    </div>
  );
}
