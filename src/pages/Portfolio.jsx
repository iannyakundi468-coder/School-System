import { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import EvidenceGrid from '../components/portfolio/EvidenceGrid';
import { Filter } from 'lucide-react';

export default function Portfolio() {
  const { studentData } = useStudent();
  const [selectedTag, setSelectedTag] = useState(null);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(studentData.portfolio?.flatMap(item => item.tags) || [])
  );

  // Filter items
  const filteredItems = selectedTag
    ? studentData.portfolio.filter(item => item.tags.includes(selectedTag))
    : studentData.portfolio;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold">Portfolio Gallery</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          A collection of your best work and academic evidence.
        </p>
      </div>

      {studentData.portfolio?.length > 0 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 pr-2 border-r border-gray-200 dark:border-gray-700">
            <Filter size={18} />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedTag === null
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Items
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <EvidenceGrid items={filteredItems || []} />
    </div>
  );
}
