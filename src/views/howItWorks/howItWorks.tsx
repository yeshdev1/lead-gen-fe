import StaggeredFadeInContent from "@/components/FadeInComponent/FadeInComponent";
import './howItWorks.css';

interface HowItWorksProps {
    next?: () => void;
    previous?: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({
    next,
    previous
}) => {
    console.log(next)
    console.log(previous);
    return (
        <div>
            <StaggeredFadeInContent
                texts={[
                    <div key="companies" className="block">
                        <h1 className="header-process">For Companies</h1>
                        <ol className="process">
                            <li>
                                1. Reach out to one of our talent acquisition specialists listed in the HIRE TALENT section, and provide information on the type of candidate you are looking for. We specialize in specific fields, as detailed in the About section.
                            </li>
                            <li>
                                2. We will work with you to set up an initial round of interviews with candidates based on your specific needs. We will also assess their interest in and commitment to your product and company.
                            </li>
                            <li>
                                3. We comprehensively vet candidates based on the key attributes you are seeking, and rate them from 1 to 5 on each attribute. By default, we focus on communication skills, technical breadth and depth, and previous project complexity. This ensures we recommend candidates best suited for your role.
                            </li>
                            <li>
                                4. We will then recommend candidates who excelled in the metrics that matter most to you, ensuring full transparency. We use AI transcription to provide detailed interview records, including the option to share recordings if desired. This helps you make informed decisions on whether to proceed with each candidate. Additionally, we provide borderline pass candidates for your review to ensure no potential talent is overlooked.
                            </li>
                        </ol>
                    </div>,
                    <div key="recruiters" className="block">
                        <h1 className="header-process">For Recruiters</h1>
                        <ol className="process">
                            <li>
                                1. Reach out to one of our talent acquisition specialists listed in the HIRE TALENT section, and provide information on the type of candidate you are looking for. We specialize in specific fields, as detailed in the About section.
                            </li>
                            <li>
                                2. We will work with you to understand the types of candidates you are seeking to fill your candidate pool, and provide tailored recommendations to potential clients and companies.
                            </li>
                            <li>
                                3. Based on the information you provide, we will identify key attributes in potential candidates to help you present them to clients with a higher degree of confidence that they will excel in the interview process. We focus on similar key attributes as mentioned for companies, including communication skills, technical expertise, and project experience.
                            </li>
                        </ol>
                    </div>
                ]}
                textAlign={'left'}
                maxWidth="900px"
            />
        </div>
    )
}

export default HowItWorks;