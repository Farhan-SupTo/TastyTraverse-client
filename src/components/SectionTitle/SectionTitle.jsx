

const SectionTitle = ({headings,subHeadings}) => {
    return (
        <div className="text-center my-8">
            <p className="text-orange-500 mb-2">--- {subHeadings} ---</p>
            <h3 className="text-3xl uppercase border-y-2 mb-4 py-4">{headings}</h3>
        </div>
    );
};

export default SectionTitle;