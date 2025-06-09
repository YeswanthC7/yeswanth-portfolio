const links = [
  'About',
  'Education',
  'Experience',
  'Projects',
  'Certifications',
  'Skills',
  'Contact'
];

export default function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-1/6 bg-white shadow p-6">
      <ul className="flex flex-col space-y-4">
        {links.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec.toLowerCase()}`}
              className="text-gray-700 hover:text-green-500 transition-colors duration-200"
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
