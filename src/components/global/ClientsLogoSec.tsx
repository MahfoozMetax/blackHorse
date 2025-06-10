


const ClientsLogoSec = ({ image }: any) => {
  return (
    <main className="h-[160px] w-[170px] ">
      <div className="border border-gray-700 rounded-xl ">
        <div className="flex justify-center items-center h-[160px] w-[160px] ">
          <img src={image} alt="" className="w-20 h-auto mx-auto" />
        </div>
      </div>
    </main>
  );
};

export default ClientsLogoSec;
