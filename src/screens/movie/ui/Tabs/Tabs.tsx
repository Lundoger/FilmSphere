import { Tab, TabList, TabPanel, Tabs as ReactTabs } from "react-tabs"
import Description from "./ui/Description/Description"
import Images from "./ui/Images/Images"

const Tabs = () => {
    const tabs = [
        { label: "Описание", content: <Description />, className: "movie-tabs__desc" },
        { label: "Кадры", content: <Images />, className: "movie-tabs__images" },
    ]

    return (
        <section className="movie-tabs">
            <div className="movie-tabs__container">
                <ReactTabs className="movie-tabs" selectedTabClassName="movie-tabs__title--active">
                    <TabList className="movie-tabs__titles">
                        {tabs.map(({ label }, i) => (
                            <Tab key={i} className="movie-tabs__title">
                                {label}
                            </Tab>
                        ))}
                    </TabList>
                    {tabs.map(({ label, content, className }) => (
                        <TabPanel className={className} key={label}>
                            {content}
                        </TabPanel>
                    ))}
                </ReactTabs>
            </div>
        </section>
    )
}

export default Tabs
