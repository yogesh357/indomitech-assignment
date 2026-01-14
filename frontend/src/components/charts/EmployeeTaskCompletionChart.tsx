import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

// Demo data shaped like a real task manager
const data = [
    {
        employeeName: 'Sham',
        completedTasks: 12,
    },
    {
        employeeName: 'Karan',
        completedTasks: 8,
    },
    {
        employeeName: 'Abhijeet',
        completedTasks: 15,
    },
    {
        employeeName: 'Yogesh',
        completedTasks: 6,
    },
    {
        employeeName: 'Shubham',
        completedTasks: 10,
    },
]

const EmployeeTaskCompletionChart = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 h-96">
            <h2 className="text-lg font-semibold mb-4">
                Tasks Completed per Employee
            </h2>

            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                    {/* X-axis: employee names */}
                    <XAxis
                        dataKey="employeeName"
                        tick={{ fill: '#475569', fontSize: 12 }}
                    />

                    {/* Y-axis: completed tasks */}
                    <YAxis
                        allowDecimals={false}
                        tick={{ fill: '#475569', fontSize: 12 }}
                    />

                    <Tooltip />
                    <Legend />

                    {/* Primary metric */}
                    <Bar
                        dataKey="completedTasks"
                        name="Tasks Completed"
                        barSize={32}
                        fill="#6366f1"
                        radius={[6, 6, 0, 0]}
                    />

                    {/* Trend line for readability */}
                    <Line
                        type="monotone"
                        dataKey="completedTasks"
                        stroke="#22c55e"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EmployeeTaskCompletionChart
