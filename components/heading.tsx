import { ReactElement } from 'react'

function Heading(): ReactElement {
  return (
    <>
      <div className='heading'>
        <span className='title'>Zilong Liang</span>
      </div>
      <style jsx>{`
        .heading {
          display: flex;
          margin: 3rem 0;
        }
        .title {
          padding: 1rem 1.5rem;
          font-weight: 600;
          font-size: 2rem;
          color: white;
          background-color: #2c2c2c;
          border-radius: 1rem;
        }
        .description {
          color: #999;
        }
      `}</style>
    </>
  )
}

export default Heading
