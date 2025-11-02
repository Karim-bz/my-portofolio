export const ExperienceCard = ({
  period,
  title,
  role,
  description,
  isActive,
  className,
}: {
  period: string;
  title: string;
  role: string;
  description?: string;
  isActive: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row gap-4 md:gap-8 pl-6 md:pl-10 ${className}`}
    >
      {/* Timeline vertical line */}
      <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-700/40" />

      {/* Dot indicator */}
      <div
        className={`absolute left-0 top-5 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
          isActive ? "bg-header border-header" : "border-gray-600"
        }`}
      />

      {/* Card content */}
      <div
        className={`flex flex-col md:flex-row w-full items-start justify-between gap-4 transition-all duration-300
          rounded-2xl p-5 md:p-7
          border ${
            isActive ? "border-header shadow-md" : "border-gray-700/50"
          } bg-gradient-to-r from-gray-900/40 to-transparent`}
        style={{
          transform: isActive
            ? "scale(1) translateY(0px)"
            : "scale(0.97) translateY(4px)",
          opacity: isActive ? 1 : 0.6,
        }}
      >
        {/* Left (Period) */}
        <div className="text-header font-semibold text-lg md:text-xl w-32">
          {period}
        </div>

        {/* Right (Main Info) */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-header">
              {title}
            </h3>
            <span className="text-md md:text-lg text-cfgray italic mt-1 sm:mt-0">
              {role}
            </span>
          </div>
          {description && (
            <p className="text-sm md:text-md xl:text-lg text-cfgray mt-3 leading-relaxed font-inter">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
