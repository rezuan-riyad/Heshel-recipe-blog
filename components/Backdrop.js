function Backdrop({ children, url }) {
  return (
    <>
      <div className="back">
          {children}
      </div>
      <style jsx>
        {`
          h1{
              color: red;
          }
          .back{
            position: relative;
            display: block;
            height: 500px;
            width: 100%;
            background: black;
          }
          .back::before{
            content: "";
            position: absolute;
            background-image: url(${url});
            background-size: cover;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0.3;
            z-index: 1;
          }

        `}
      </style>
    </>
  )
}

export default Backdrop