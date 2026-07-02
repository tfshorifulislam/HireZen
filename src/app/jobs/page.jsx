import React from "react";
import {
    Label,
    SearchField,
    Select,
    ListBox,
} from "@heroui/react";
import {
    MapPin,
    BriefcaseBusiness,
    Clock3,
    DollarSign,
    Building2,
} from "lucide-react";

const jobs = [
    {
        id: 1,
        company: "OpenAI",
        title: "Frontend Developer",
        location: "Remote",
        type: "Full Time",
        salary: "$3k - $5k",
        experience: "2+ Years",
        logo:
            "https://ui-avatars.com/api/?name=OpenAI&background=111827&color=fff",
    },
    {
        id: 2,
        company: "Stripe",
        title: "Backend Engineer",
        location: "USA",
        type: "Full Time",
        salary: "$5k - $8k",
        experience: "3+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Stripe&background=635BFF&color=fff",
    },
    {
        id: 3,
        company: "Vercel",
        title: "Full Stack Developer",
        location: "Remote",
        type: "Contract",
        salary: "$4k - $6k",
        experience: "2 Years",
        logo:
            "https://ui-avatars.com/api/?name=Vercel&background=000000&color=fff",
    },
    {
        id: 4,
        company: "Netflix",
        title: "UI Engineer",
        location: "Canada",
        type: "Full Time",
        salary: "$6k - $9k",
        experience: "4+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Netflix&background=E50914&color=fff",
    },
    {
        id: 5,
        company: "Google",
        title: "React Developer",
        location: "Remote",
        type: "Internship",
        salary: "$2k",
        experience: "Freshers",
        logo:
            "https://ui-avatars.com/api/?name=Google&background=4285F4&color=fff",
    },
    {
        id: 56676,
        company: "Microsoft",
        title: "Software Engineer",
        location: "UK",
        type: "Full Time",
        salary: "$7k",
        experience: "3+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Microsoft&background=0078D4&color=fff",
    },
    {
        id: 656,
        company: "Microsoft",
        title: "Software Engineer",
        location: "UK",
        type: "Full Time",
        salary: "$7k",
        experience: "3+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Microsoft&background=0078D4&color=fff",
    },
    {
        id: 54546,
        company: "Microsoft",
        title: "Software Engineer",
        location: "UK",
        type: "Full Time",
        salary: "$7k",
        experience: "3+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Microsoft&background=0078D4&color=fff",
    },
    {
        id: 546546,
        company: "Microsoft",
        title: "Software Engineer",
        location: "UK",
        type: "Full Time",
        salary: "$7k",
        experience: "3+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Microsoft&background=0078D4&color=fff",
    },
    {
        id: 5465465,
        company: "Microsoft",
        title: "Software Engineer",
        location: "UK",
        type: "Full Time",
        salary: "$7k",
        experience: "3+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Microsoft&background=0078D4&color=fff",
    },
    {
        id: 55456,
        company: "Microsoft",
        title: "Software Engineer",
        location: "UK",
        type: "Full Time",
        salary: "$7k",
        experience: "3+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Microsoft&background=0078D4&color=fff",
    },
    {
        id: 546,
        company: "Microsoft",
        title: "Software Engineer",
        location: "UK",
        type: "Full Time",
        salary: "$7k",
        experience: "3+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Microsoft&background=0078D4&color=fff",
    },
    {
        id: 126,
        company: "Microsoft",
        title: "Software Engineer",
        location: "UK",
        type: "Full Time",
        salary: "$7k",
        experience: "3+ Years",
        logo:
            "https://ui-avatars.com/api/?name=Microsoft&background=0078D4&color=fff",
    },
];

const JobPage = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero */}
            <section className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-16">

                    <h1 className="text-5xl font-bold text-[#293681]">
                        Find Your <span className="text-[#3881f5]">Dream Remote Job</span>
                    </h1>

                    <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                        Discover thousands of remote opportunities from top companies around the world.
                    </p>

                    {/* Search + Filter */}

                    <div className="flex flex-col lg:flex-row gap-4 mt-10">

                        <SearchField name="search">
                            <Label>Search</Label>
                            <SearchField.Group>
                                <SearchField.SearchIcon />
                                <SearchField.Input className="w-[280px]" placeholder="Search..." />
                                <SearchField.ClearButton />
                            </SearchField.Group>
                        </SearchField>

                        <Select className="w-[256px]" placeholder="Select one">
                            <Label>State</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="florida" textValue="Florida">
                                        Florida
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="delaware" textValue="Delaware">
                                        Delaware
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="california" textValue="California">
                                        California
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="texas" textValue="Texas">
                                        Texas
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="new-york" textValue="New York">
                                        New York
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="washington" textValue="Washington">
                                        Washington
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                    </div>

                </div>
            </section>

            {/* Jobs */}

            <section className="max-w-7xl mx-auto px-6 py-12">

                <div className="flex items-center justify-between mb-8">

                    <h2 className="text-3xl font-bold">
                        Available Jobs
                    </h2>

                    <p className="text-slate-500">
                        {jobs.length} Jobs Found
                    </p>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {jobs.map((job) => (

                        <div
                            key={job.id}
                            className="bg-white rounded-2xl border hover:border-blue-500 hover:shadow-xl transition-all duration-300 p-6"
                        >

                            <div className="flex items-center gap-4">

                                <img
                                    src={job.logo}
                                    className="w-14 h-14 rounded-xl"
                                    alt=""
                                />

                                <div>

                                    <h3 className="font-bold text-lg">
                                        {job.title}
                                    </h3>

                                    <p className="text-slate-500 flex items-center gap-1">
                                        <Building2 size={16} />
                                        {job.company}
                                    </p>

                                </div>

                            </div>

                            <div className="mt-6 space-y-3">

                                <div className="flex items-center gap-2 text-slate-600">
                                    <MapPin size={17} />
                                    {job.location}
                                </div>

                                <div className="flex items-center gap-2 text-slate-600">
                                    <BriefcaseBusiness size={17} />
                                    {job.type}
                                </div>

                                <div className="flex items-center gap-2 text-slate-600">
                                    <DollarSign size={17} />
                                    {job.salary}
                                </div>

                                <div className="flex items-center gap-2 text-slate-600">
                                    <Clock3 size={17} />
                                    {job.experience}
                                </div>

                            </div>

                            <div className="mt-6 flex items-center justify-between">

                                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                                    Actively Hiring
                                </span>

                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl">
                                    Apply
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    );
};

export default JobPage;