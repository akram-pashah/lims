type CustomCellRendererProps = {
  value: any;
  onClick: () => void;
};

const CustomCellRenderer: React.FC<CustomCellRendererProps> = ({ value, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {value}
    </div>
  );
};

export default CustomCellRenderer;
