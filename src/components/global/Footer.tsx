const Footer = () => {
  return (
    <footer className="bg-primary">
      <main className="flex items-center justify-center py-7 max-w-6xl mx-auto">
        <div className="flex justify-center w-full">
          <p className="text-gray-400 w-[85%] md:w-full text-center text-sm">
            Copyright 2025 all rights reserved by Black Horse Consultancy and Management F.Z.E
            & Developed by{" "}
            <a
              href="https://mahfooz-nu.vercel.app/"
              target="_blank"
              className="text-white font-medium font-montserrat"
            >
              Mahfooz Ul Haq.
            </a>
          </p>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
