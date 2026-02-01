"use client"

import React from 'react';
import EnergyBeam from '@/components/ui/energy-beam';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const EnergyDemo = () => {
    return (
        <div className="relative">
            {/* Navigation back */}
            <Link 
                href="/"
                className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-300/30 hover:border-orange-300/50 text-orange-100 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
            </Link>

            {/* Energy Beam Component */}
            <EnergyBeam />
        </div>
    );
};

export default EnergyDemo;
