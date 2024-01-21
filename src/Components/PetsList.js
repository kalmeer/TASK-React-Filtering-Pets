import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import petsData from "../petsData";

export function PetsList() {
  const [petList, setPetList] = useState(
    pets.map((pet) => <PetItem pet={pet} key={pet.id} />)
  );
  const [query, setQuery] = useState(petsData);
  const [type, setType] = useState(petsData);

  const handleType = (e) => {
    const filteredPets = petsData.filter((pet) =>
      pet.type.includes(e.target.value)
    );
    setType(filteredPets);
    setPetList(filteredPets.map((pet) => <PetItem pet={pet} key={pet.id} />));
  };

  const handleChange = (e) => {
    const filteredPets = petsData.filter((pet) =>
      pet.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQuery(filteredPets);
    setPetList(filteredPets.map((pet) => <PetItem pet={pet} key={pet.id} />));
  };

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div
              className="section-title text-center mb-30"
              onclick={handleType}
            >
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  onChange={handleChange}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange={handleType}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
