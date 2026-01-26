import { companyData } from "../Data/Company";

const AboutComp = () => {
  const company: { [key: string]: any } = companyData;

  return (
    <div className="flex flex-col gap-5">
      {Object.keys(company).map((key, index) => (
        key !== "name" && (
          <div key={index}>
            <div className="text-xl mb-3 font-semibold">
              {key}
            </div>

            {key !== "website" ? (
              <div className="text-sm text-night-shaft-300 text-justify">
                {key === "specialties"
                  ? company[key].map((item: string, idx: number) => (
                      <span key={idx}>• {item} </span>
                    ))
                  : company[key]}
              </div>
            ) : (
              <a
                href={company[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bright-sun-400 text-justify"
              >
                {company[key]}
              </a>
            )}
          </div>
        )
      ))}
    </div>
  );
};

export default AboutComp;
