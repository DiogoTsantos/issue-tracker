import { Issue } from '../types/issue';

export default function IssueItem({ issue }: { issue: Issue }) {
  return (
    <tr className='issue-card'>
      <td>{issue.title}</td>
      <td>{issue.description}</td>
      <td>{issue.status}</td>
      <td>{issue.priority}</td>
      <td>{issue.createdAt}</td>
    </tr>
  );
}