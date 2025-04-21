import { PageContent } from './utils';

const USTDRecharge = () => {
  return (
    <>
      {PageContent.map((page, index) => (
        <div key={index}>
          <div className="mx-4 flex items-center">
            <img src={page.pageTitleImg} alt="Recharge Tutorial" className="mr-4 h-10 w-14" />
            <h4 className="bg-gradient-to-r from-[#A03D8C] to-[#4C2CCA] bg-clip-text text-center text-lg font-bold text-transparent">
              {page.title}
            </h4>
          </div>
          {page.subs?.map((sub, subIndex) => (
            <div key={subIndex}>
              <div className="mx-4 mb-3 mt-3">
                <img src={sub.img} alt={`Step ${subIndex + 1}`} className="mb-3 w-full" />
                <p className="whitespace-pre-line">
                  {sub.description.split('\n').map((line, i) => (
                    <span
                      key={i}
                      className={
                        line.includes('(Note:')
                          ? 'inline-block text-xs text-red-500'
                          : 'inline-block'
                      }
                    >
                      {line}
                    </span>
                  ))}
                </p>
                {sub.label === 'Page1' && (
                  <div className="mx-9 my-4 h-0.5 bg-gradient-to-r from-[#A03D8C] to-[#4C2CCA] opacity-50"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default USTDRecharge;
