
import { useState } from 'react';

// ContactModal Component
export const ContactModal = ({ isOpen, onClose }: any) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        query: ''
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! We will contact you soon.');
        onClose();
        setFormData({ name: '', phone: '', query: '' });
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 relative" onClick={(e) => e.stopPropagation()}>
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                >
                    ×
                </button>
                
                <h2 className="text-3xl font-bold mb-2 text-[#6321ee]">Get in Touch</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you soon.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8075ff] focus:border-transparent outline-none"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8075ff] focus:border-transparent outline-none"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Query *
                        </label>
                        <textarea
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8075ff] focus:border-transparent outline-none resize-none"
                            placeholder="Tell us about your project or inquiry..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#8075ff] text-white py-3 rounded-lg font-medium hover:bg-[#554df7] transition-all"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};