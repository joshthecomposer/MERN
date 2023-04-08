import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const ApiForm = (props) => {
    const [resource, setResource] = useState("people");
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${resource}/${id}`)
    }
  return (
    <div className="flex justify-center m-20">
        <form className="p-5 rounded shadow flex flex-col gap-5 justify-center items-center" onSubmit={handleSubmit}>
            <div>
                  <select defaultValue="people" onChange={(e) => setResource(e.target.value)} className="text-center border-2 border-neutral-500 rounded" name="resource">
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div className="flex gap-5">
                <input
                className="text-center border-2 border-neutral-500 rounded"
                type="number"
                name="id"
                placeholder="Id Number"
                onChange={(e)=>setId(e.target.value)}
                />
              </div>
              <button className="rounded py-2 px-10 bg-indigo-500 text-indigo-50">Submit</button>
        </form>
    </div>
  )
}

export default ApiForm