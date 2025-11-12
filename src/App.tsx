import { useEffect, useState } from "react"
import Form from "./components/Form"
import Card from "./components/Card";
import Modal from "./components/Modal";

interface IJson {
  cards: {
    image: string,
    title: string,
    dateTime: string,
    area: string,
    description: string
  }[]
}

function App() {

  const [data, setData] = useState<IJson | null> (null);
  const [loading, setLoading] = useState<boolean> (true);
  const [error, setError] = useState<string | null> (null);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        if(!response.ok) {
          console.log(response.status);
          throw new Error(`HTTP Error, status ${response.status}`);
        }
        const jsonData: IJson = await response.json();
        setData(jsonData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  const originalArray = data?.cards.map((item) => (item.area))
  const uniqueArray = [... new Set(originalArray)];

  return (
    <main className="bg-main work-sans-font m-0">
      <header className="p-8 flex justify-center bg-main">
        <img src="/logo.png" alt="Logo Tecboard" />
      </header>

      <section className="banner-gradient flex justify-center">
        <img className='max-w-[90%]' src="/banner.png" alt="Banner" />
      </section>

      <div className="flex justify-center m-8">
        <button
          className="p-4 bg-primary font-bold rounded-lg border-amber-50 border" 
          onClick={handleOpenModal}>Agende seu evento
        </button>

          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <Form />
          </Modal>
      </div>



      <div className="mx-10 flex flex-col gap-8">

        {uniqueArray.map((area) => (
          <>
          <h2 className="font-bold text-2xl orbitron-font">{area.toUpperCase()}</h2>

          {
            <div className="flex justify-start flex-wrap gap-3">
              {data?.cards.filter((card) => card.area === area).map((card) => (
                <Card 
                  key={card.id} 
                  image={card.image} 
                  title={card.title} 
                  dateTime={card.dateTime} 
                  area={card.area} 
                  description={card.description}
                />
              ))}
            </div>
          } 
          </>
        ))}

      </div>

      {/* FOOTER */}
      <div className="flex items-center flex-col mt-5">
        <img className="max-w-[160px]" src="/logo.png" alt="" />

        <p>Desenvolvido por Alura. Projeto fictício  sem fins comerciais.</p>
      </div>
    </main>
  )
}

export default App
