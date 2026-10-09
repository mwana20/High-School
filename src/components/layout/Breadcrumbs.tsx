import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigate } = useSchool();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-stone-500">
        <li>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              {isLast || !item.path ? (
                <span className="font-semibold text-stone-900">{item.label}</span>
              ) : (
                <button
                  onClick={() => navigate(item.path!)}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
