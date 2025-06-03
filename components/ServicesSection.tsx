import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Business Strategy Investments",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime",
    image: "/img/service-1.jpg",
    icon: "fas fa-donate",
  },
  {
    id: 2,
    title: "Consultancy & Advice",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime",
    image: "/img/service-2.jpg",
    icon: "fas fa-donate",
  },
  {
    id: 3,
    title: "Investment Planning",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime",
    image: "/img/service-4.jpg",
    icon: "fas fa-donate",
  },
  {
    id: 4,
    title: "Private Client Investment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime",
    image: "/img/service-3.jpg",
    icon: "fas fa-donate",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fadeInUp">
          <h4 className="text-primary text-lg font-semibold mb-2">Our Services</h4>
          <h1 className="display-4">Offering the Best Consulting & Investment Services</h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 group-hover:bg-dark transition-colors duration-500">
                <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                  <div className="flex items-start mb-4">
                    <i className={`${service.icon} text-2xl text-primary mr-3 mt-1`}></i>
                    <h4 className="text-xl font-semibold group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-300 mb-4 transition-colors duration-500">
                    {service.description}
                  </p>
                  <a href="#" className="btn btn-light group-hover:btn-primary transition-all duration-500">
                    Read More
                  </a>
                </div>
                <div className="absolute inset-0 bg-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fadeInUp">
          <a href="/services" className="btn btn-primary">
            Services More
          </a>
        </div>
      </div>
    </section>
  )
}
