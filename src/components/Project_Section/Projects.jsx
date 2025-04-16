import './Project.css';

function Projects() {
  // Array com dados das 9 imagens
  const gridItems = [
    { id: 1, image: "/Pics/andre.jpg", title: "Projeto 1" },
    { id: 2, image: "/Pics/asia.jpg", title: "Projeto 2" },
    { id: 3, image: "/Pics/catiamatos.jpg", title: "Projeto 3" },
    { id: 4, image: "/Pics/hikaique.jpg", title: "Projeto 4" },
    { id: 5, image: "/Pics/Wall.jpg", title: "Projeto 5" },
    { id: 6, image: "/Pics/Wall.jpg", title: "Projeto 6" },
    { id: 7, image: "/Pics/Wall.jpg", title: "Projeto 7" },
    { id: 8, image: "/Pics/yoshinoya.jpg", title: "Projeto 8" },
    { id: 9, image: "/Pics/zebra.jpg", title: "Projeto 9" },
  ];

  return (
    <div className="parent">
      {gridItems.map(item => (
        <div key={item.id} className={`div${item.id}`}>
          <img 
            src={item.image} 
            alt={item.title} 
            className="grid-image" 
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;