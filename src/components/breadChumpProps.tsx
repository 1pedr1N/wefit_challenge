import { BreadcrumbProps } from './types';

function Breadcrumb({ routes, currentPath }: BreadcrumbProps) {
    return (
        <div className="flex gap-2">
            {routes.map(({ name, path }, index) => (
                <div key={path} className='flex gap-2'>
                    <span className={currentPath === path ? 'font-bold' : ''}>{name}</span>
                    {index + 1 !== routes.length && <span>-</span>}
                </div>
            ))}
        </div>
    );
}

export default Breadcrumb;
