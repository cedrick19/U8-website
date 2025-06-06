import { PageContent } from './utils';

const WithdrawalCourse = () => {
  return (
    <>
      {PageContent.map((page, index) => (
        <div key={index} className="mx-4 mb-3 mt-3">
          <img src={page.img} alt={`Step ${index + 1}`} className="mb-2 w-full" />
          <>
            {page.description.split('\n').map((line, i) => (
              <span
                key={i}
                className={
                  line.includes('(Note:') ? 'inline-block text-xs text-red-500' : 'inline-block'
                }
              >
                {line}
              </span>
            ))}
          </>
        </div>
      ))}
    </>
  );
};

export default WithdrawalCourse;
