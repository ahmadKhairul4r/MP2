import Card from '../../../../components/card';

export default function AdminWork() {
    return (<>
        <Card title="Work Form" className="pb-5">
          <div className="w-full my-2">
              <label>Title</label>
              <input type="text" className="w-full border my-input-text"/>
          </div>

          <div className="w-full my-2">
              <label>Employe Type</label>
              <select  className="w-full border my-input-text">
                <option>Full time</option>
              </select>
          </div>

          <div className="w-full my-2">
              <label>Company Name</label>
              <input type="text" className="w-full border my-input-text"/>
          </div>

          <div className="w-full my-2">
              <label>Location</label>
              <select  className="w-full border my-input-text">
                <option>Onsite</option>
              </select>
          </div>

          <div className="w-full my-2">
              <label>Start Date</label>
              <input type="date" className="w-full border my-input-text"/>
          </div>

          <div className="w-full my-2">
              <label>End Date</label>
              <input type="date" className="w-full border my-input-text"/>
          </div>

          <button className="mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
              <label>Submit Data</label>
          </button>
        </Card>
        
        <Card title="List of Work" className="my-2">
          asdf
        </Card>
      </>
    );
}
  