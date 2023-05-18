import Image from 'next/image'
import Sidebar from './sidebar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex w-full h-12">
        <div className="w-30 sm:w-60 items-center justify-center p-2">
          <p className="text-2xl mx-auto w-fit">Logo</p>
        </div>
        <ul className=" flex flex-1  justify-between   px-10 py-3">
          <li>Service</li>
          <li>Enterprise</li>
          <li>Customer</li>
          <li>Product</li>
        </ul>
      </div>
      <hr className="border-b border-0 border-gray-200 w-full"></hr>

      <main className="flex flex-1 justify-between  w-full">
        <section className=" w-48 sm:w-60 py-4 p-4 overflow-y-auto overflow-x-hidden h-screen  ">
          <div className="mb-40 mx-2">
            <Sidebar />
          </div>
        </section>
        <section className="flex-1 p-4 ">
          <div className="mt-2 h-[85vh] overflow-y-auto p-6 border border-gray-200 rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            debitis velit facere odit laudantium totam nihil exercitationem,
            dolore at. Animi delectus sed est ipsa, quis vitae odio esse unde
            officia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet debitis velit facere odit laudantium totam nihil
            exercitationem, dolore at. Animi delectus sed est ipsa, quis vitae
            odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet debitis velit facere odit laudantium totam
            nihil exercitationem, dolore at. Animi delectus sed est ipsa, quis
            vitae odio esse unde officia?
          </div>
        </section>
      </main>
    </main>
  );
}
