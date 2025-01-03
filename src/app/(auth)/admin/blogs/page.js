import Card from '../../../../components/card';

export default function AdminBlogs() {
    return (
      <>
        <Card title="List of Blogs" style="mt-5">
            <table className="table-auto ">
                <thead >
                    <tr className='border-b border-blue-gray-100 bg-gray-100 '>
                        <th className='p-2'>Title</th>
                        <th className='p-2'>Sub_Title</th>
                        <th className='p-2'>Content</th>
                        <th className='p-2'>Created_at</th>
                        <th className='p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
               
            
                    <tr className='border-b border-blue-gray-50 '>
                        <td className='p-2 '>3</td>
                        <td className='p-2 '>Jhon doe</td>
                        <td className='p-2 '>jhondoe@mail.com</td>
                        <td className='p-2 '>Loremipsum</td>
                        <td className='p-2 '>
                            <div class="inline-flex text-[12px]">
                                <button class=" bg-green-300 hover:bg-green-400 text-gray-800 py-2 px-4 rounded-l">
                                    Detail
                                </button>
                                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4">
                                    Edit
                                </button>
                                <button class="bg-red-300 hover:bg-red-400 text-gray-800 py-2 px-4 rounded-r">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
      </>
    );
}
  