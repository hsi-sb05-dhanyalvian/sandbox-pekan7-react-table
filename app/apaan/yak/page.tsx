export default function GroupButton() {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-l-md hover:bg-blue-700">
        Left
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white border-x border-blue-500 hover:bg-blue-700">
        Middle
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
        Right
      </button>
    </div>
  );
}
