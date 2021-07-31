export default function Footer({ children }) {
  return (
    <footer>
      <div className="bg-gray-50 mx-auto p-1">
        <h6 className={`text-center fontsize-sm`}>{children}</h6>
      </div>
    </footer>
  );
}
