import React, { useState } from 'react';
import { FaUserPlus, FaEllipsisV, FaCheck } from 'react-icons/fa';

const initialMembers = [
  { id: 1, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Admin', itemsPacked: 5, status: 'active' },
  { id: 2, name: 'Michael Brown', email: 'michael@example.com', role: 'Member', itemsPacked: 3, status: 'active' },
  { id: 3, name: 'Emma Davis', email: 'emma@example.com', role: 'Viewer', itemsPacked: 0, status: 'pending' },
];

const MemberList = () => {
  const [members, setMembers] = useState(initialMembers);
  const [email, setEmail] = useState('');
  const [inviteLink, setInviteLink] = useState('');

  const generateInviteLink = () => {
    const link = `https://packpal.com/invite/${Math.random().toString(36).substring(2, 10)}`;
    setInviteLink(link);
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Members</h2>
        <button className="btn-primary flex items-center">
          <FaUserPlus className="mr-2" />
          Add Member
        </button>
      </div>
      {/* Remaining code */}
    </div>
  );
};

export default MemberList;