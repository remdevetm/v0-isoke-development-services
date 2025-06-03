import { Check, Users, Award, TrendingUp } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Company</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a leading investment firm with over 20 years of experience in helping clients achieve their
              financial goals. Our team of expert advisors provides personalized investment strategies tailored to your
              unique needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Professional Investment Management</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Comprehensive Financial Planning</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Risk Management Solutions</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">24/7 Customer Support</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Users className="text-blue-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <Award className="text-blue-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-800">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <TrendingUp className="text-blue-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-800">$2B+</div>
                <div className="text-sm text-gray-600">Assets Managed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="/placeholder.svg?height=500&width=600" alt="About Us" className="rounded-lg shadow-lg w-full" />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-sm">Average Annual Return</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
