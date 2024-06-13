
function Header() {
    return (
        <header className="bg-gray-900 text-white p-4">
            <span className="flex justify-center space-x-20">
                <div className=" space-x-20">
                    <a href="/" className="hover:text-purple-400 md:font-bold">/</a>
                    <a href="#skills" className="hover:text-purple-400">Skills</a>
                    <a href="#projects" className="hover:text-purple-400">Projects</a>
                </div>
                <div className="flex justify-end">
                    <a
                    href="https://drive.google.com/file/d/1qP58mQ9wTNztGPHrV6Iv3utUvSCgxo4i/view?usp=drive_link"
                    className="hover:text-purple-400 flex justify-end" target="_blank">
                    Resume
                    </a>
                </div>
            </span>
        </header>
    )
};

export default Header;