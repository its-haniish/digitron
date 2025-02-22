
const SingleCard = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
  }) => {
    return (
      <>
        {/*  */}
        <div className="mb-10 overflow-hidden rounded-lg border-2 bg-white shadow-1 md:w-64 lg:w-80 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
          <img src={image} alt="" className="w-full" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                className="mb-4 block text-xl font-semibold text-black  sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
  
            {Button && (
              <a
                href={btnHref ? btnHref : "#"}
                className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color  hover:bg-black hover:text-white transition-all ease-in-out duration-300  border-dark-3 dark:text-dark-6"
              >
                {Button}
              </a>
            )}
          </div>
        </div>
        {/*  */}
      </>
    );
  };
  
export default SingleCard;