import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 container mx-auto">
        <h1 className="text-4xl font-bold mb-6">About ITCuTech</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            ITCuTech is a leading technology consulting firm specializing in MVP development,
            AI automation, and technical consulting services. We help businesses transform
            their ideas into reality through innovative solutions and cutting-edge technology.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            To empower businesses with innovative technology solutions that drive growth
            and success in the digital age.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Rapid MVP Development</li>
            <li>AI & Machine Learning Solutions</li>
            <li>Technical Consulting</li>
            <li>Custom Software Development</li>
            <li>AI Training & Workshops</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;