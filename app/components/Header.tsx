interface HeaderProps {
  onToggle: () => void;
}

export default function Header({ onToggle }: HeaderProps) {
  return (
    <div id="header">
      <i className="uil uil-bars" onClick={onToggle} style={{ cursor: 'pointer', position: 'absolute', left: '20px' }}></i>
      <h1>CSS Practice</h1>
    </div>
  );
}

